package com.torajawonders.torajawondersapi;

import com.torajawonders.torajawondersapi.entity.Role;
import com.torajawonders.torajawondersapi.entity.Roles;
import com.torajawonders.torajawondersapi.repository.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

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
		if (!roleRepository.existsById(1L)){
			Role user = new Role();
			user.setName("USR");
			roleRepository.save(user);
		}

		if (!roleRepository.existsById(2L)) {
			Role admin = new Role();
			admin.setName("ADM");
			roleRepository.save(admin);
		}
	}
}
