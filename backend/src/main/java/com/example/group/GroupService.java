package com.example.group;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

import com.example.user.User;
import com.example.user.UserRepository;


@Service
public class GroupService {
	private final GroupRepository groupRepository;
	
    @Autowired
    public GroupService(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }
    
    public Group createGroup(Group group) {
    	return groupRepository.save(group);
    }
}
