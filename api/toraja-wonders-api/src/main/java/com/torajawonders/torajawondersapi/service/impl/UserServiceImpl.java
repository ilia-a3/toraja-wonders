package com.torajawonders.torajawondersapi.service.impl;

import com.torajawonders.torajawondersapi.entity.Roles;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.exception.APIException;
import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.repository.RoleRepository;
import com.torajawonders.torajawondersapi.repository.UserRepository;
import com.torajawonders.torajawondersapi.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private ModelMapper modelMapper;
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(UserRegistration userRegistration) {
        return userRepository.save(newUser(userRegistration, "USR"));
    }
    @Override
    public User registerAdmin(UserRegistration userRegistration) {
        return userRepository.save(newUser(userRegistration, "ADM"));
    }
    private User newUser(UserRegistration userRegistration, String role) {
        User user = modelMapper.map(userRegistration, User.class);
        user.setRole(roleRepository.findByName(role).orElseThrow(() -> APIException.notFoundException("Role")));
        user.setPassword(encode(user.getPassword()));
        return user;
    }
    private String encode(String input) {
        // TODO encode password
        return passwordEncoder.encode(input);
    }

}
