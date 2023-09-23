package com.torajawonders.torajawondersapi;

import com.torajawonders.torajawondersapi.entity.Role;
import com.torajawonders.torajawondersapi.entity.Roles;
import com.torajawonders.torajawondersapi.entity.User;
import com.torajawonders.torajawondersapi.exception.APIException;
import com.torajawonders.torajawondersapi.payload.UserRegistration;
import com.torajawonders.torajawondersapi.repository.RoleRepository;
import com.torajawonders.torajawondersapi.repository.UserRepository;
import com.torajawonders.torajawondersapi.service.UserService;
import com.torajawonders.torajawondersapi.service.impl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TorajaWondersApiApplication implements CommandLineRunner {
	private RoleRepository roleRepository;

	public TorajaWondersApiApplication(RoleRepository roleRepository) {
		this.roleRepository = roleRepository;
	}

	@Bean
	ModelMapper modelMapper() {
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(TorajaWondersApiApplication.class, args);
	}

	@Override
	public void run(String... args) {
//		Initialise roles
		if (!roleRepository.existsById(1L)){
			Role user = new Role();
			user.setName("ROLE_USR");
			roleRepository.save(user);
		}
		if (!roleRepository.existsById(2L)) {
			Role admin = new Role();
			admin.setName("ROLE_ADM");
			roleRepository.save(admin);
		}

////		Create default admin login
//		if (!userRepository.existsByUsername(adminUsername)){
//			User user = modelMapper.map(new UserRegistration(adminUsername, adminEmail, adminPassword), User.class);
//			user.setRole(roleRepository.findByName("ROLE_ADM").orElseThrow(() -> APIException.notFoundException("Role")));
//			user.setPassword(passwordEncoder.encode(user.getPassword()));
//			userRepository.save(user);
//		}
	}
}
