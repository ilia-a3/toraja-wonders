package com.torajawonders.torajawondersapi.service;

import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.payload.UserRegistration;

public interface UserService {
    User registerAdmin(UserRegistration userRegistration);
    User registerUser(UserRegistration userRegistration);
}
