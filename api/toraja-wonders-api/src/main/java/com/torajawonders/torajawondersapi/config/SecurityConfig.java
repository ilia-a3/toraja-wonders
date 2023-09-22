package com.torajawonders.torajawondersapi.config;


import com.torajawonders.torajawondersapi.security.JwtAuthenticationEntryPoint;
import com.torajawonders.torajawondersapi.security.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private UserDetailsService userDetailsService;
    private JwtAuthenticationEntryPoint authenticationEntryPoint;
    private JwtAuthenticationFilter authFilter;

    public SecurityConfig(UserDetailsService userDetailsService, JwtAuthenticationEntryPoint authenticationEntryPoint, JwtAuthenticationFilter authFilter) {
        this.userDetailsService = userDetailsService;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.authFilter = authFilter;
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(httpSecurityCsrfConfigurer -> {
            try {
                httpSecurityCsrfConfigurer.disable().authorizeHttpRequests((authorize) ->
                                authorize.requestMatchers(HttpMethod.GET, "/api/**").permitAll()
                                        .requestMatchers(HttpMethod.POST, "/api/**").permitAll()
                                        .anyRequest().authenticated()
                ).exceptionHandling(e ->
                        e.authenticationEntryPoint(authenticationEntryPoint)
                ).sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
        http.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
