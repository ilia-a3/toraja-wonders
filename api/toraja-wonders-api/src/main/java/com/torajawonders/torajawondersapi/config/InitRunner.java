package com.torajawonders.torajawondersapi.config;

import ch.qos.logback.classic.encoder.JsonEncoder;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.exception.APIException;
import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.repository.RoleRepository;
import com.torajawonders.torajawondersapi.repository.UserRepository;
import com.torajawonders.torajawondersapi.service.UserService;
import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class InitRunner implements CommandLineRunner {
//    private UserRepository userRepository;
//    private ModelMapper modelMapper;
//    private RoleRepository roleRepository;
//    private PasswordEncoder passwordEncoder;
    private UserService userService;

    @Value("${app.default-admin.username}")
    private String adminUsername;
    @Value("${app.default-admin.email}")
    private String adminEmail;
    @Value("${app.default-admin.password}")
    private String adminPassword;

    public InitRunner(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) {
//		Create default admin login
        if (!userService.userExistsByUsername(adminUsername)){
//            User user = modelMapper.map(new UserRegistration(adminUsername, adminEmail, adminPassword), User.class);
//            user.setRole(roleRepository.findByName("ROLE_ADM").orElseThrow(() -> APIException.notFoundException("Role")));
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
//			userRepository.save(user);
            userService.registerAdmin(new UserRegistration(adminUsername, adminEmail, adminPassword));
		}
    }
}
