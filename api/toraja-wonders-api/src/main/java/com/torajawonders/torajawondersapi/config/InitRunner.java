package com.torajawonders.torajawondersapi.config;

import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
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
        if (userService.getUserByUsername(adminUsername) == null){
//            User user = modelMapper.map(new UserRegistration(adminUsername, adminEmail, adminPassword), User.class);
//            user.setRole(roleRepository.findByName("ROLE_ADM").orElseThrow(() -> APIException.notFoundException("Role")));
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
//			userRepository.save(user);
            userService.registerAdmin(new UserRegistration(adminUsername, adminEmail, adminPassword));
		}
    }
}
