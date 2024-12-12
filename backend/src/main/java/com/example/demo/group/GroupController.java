package com.example.demo.group;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ApiResponse;
import com.example.demo.user.User;
import com.example.demo.user.UserService;

@RestController
@RequestMapping("/group")
public class GroupController {
	
	@Autowired
	private GroupService groupService;
	@Autowired
	private UserService userService;
	@PostMapping("/create")
	public ResponseEntity<ApiResponse> createGroup(@RequestBody CreateGroupRequest createGroupRequest) {
		Group group = new Group();
		group.setId(createGroupRequest.getId());
		group.setName(createGroupRequest.getName());
		group.setPurpose(createGroupRequest.getPurpose());	    

	    // Fetch the user (owner) from the UserService or database
	    Optional<User> owner = userService.findById(group.getId());

	    if (owner.isPresent()) {
	        // Set the owner of the group
	        group.setOwner(owner.get());
	        System.out.println("Owner: " + owner.get().getUsername());

	        // Save the group
	        groupService.createGroup(group);

	        return ResponseEntity.ok(new ApiResponse("Group created successfully", group));
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Owner not found"));
	    }
	}
}
