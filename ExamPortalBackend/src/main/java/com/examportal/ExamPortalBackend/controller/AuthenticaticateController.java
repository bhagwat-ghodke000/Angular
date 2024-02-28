package com.examportal.ExamPortalBackend.controller;

import com.examportal.ExamPortalBackend.configuration.JwtUtil;
import com.examportal.ExamPortalBackend.entity.JwtRequest;
import com.examportal.ExamPortalBackend.entity.JwtResponse;
import com.examportal.ExamPortalBackend.entity.User;
import com.examportal.ExamPortalBackend.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticaticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/generateToken")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest){

        try {

            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());

        }catch (Exception e){

            e.printStackTrace();
            throw new RuntimeException("User is not found...");
        }

        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());

        String token = this.jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }


    private void authenticate(String username,String password) throws Exception{

        try {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        }catch (DisabledException e){

            throw new Exception("This is a Disable user..");
        }catch (BadCredentialsException e){

            throw new Exception("Invalid Credentials "+ e.getMessage());
        }
    }


    @GetMapping("/current-user")
    public User getCurrentLoginUser(Principal principal){

        return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
    }

    
}
