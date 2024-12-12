package com.example.demo.group;

public class CreateGroupRequest {
    private Integer owner_id;
    private String groupName;
    private String groupPurpose;

    // Getters and setters
    public Integer getId() {
    	return owner_id;
    }
    public void setId(Integer owner_id) {
    	this.owner_id = owner_id;
    }
    public String getName() {
        return groupName;
    }

    public void setName(String groupName) {
        this.groupName = groupName;
    }

    public String getPurpose() {
        return groupPurpose;
    }

    public void setPurpose(String groupPurpose) {
        this.groupPurpose = groupPurpose;
    }
}
