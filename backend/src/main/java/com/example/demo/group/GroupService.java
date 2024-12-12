package com.example.demo.group;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.example.demo.user.User;
import com.example.demo.user.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;


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
