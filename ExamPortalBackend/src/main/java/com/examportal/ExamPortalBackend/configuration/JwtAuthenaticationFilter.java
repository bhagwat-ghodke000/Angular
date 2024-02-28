package com.examportal.ExamPortalBackend.configuration;

import com.examportal.ExamPortalBackend.service.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenaticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwt;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


       final String requestTokenHeader = request.getHeader("Authorization");

       String userName = null;
       String jwtToken = null;

       if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer")){

           jwtToken = requestTokenHeader.substring(7);

           try {

               userName = this.jwt.getUsernameFromToken(jwtToken);

           }catch (ExpiredJwtException e){

               System.out.println("This token is expire");
           }catch (Exception e){

               e.printStackTrace();
           }

       }else {
           System.out.println("Token is not valid...");
       }

       if(userName !=null && SecurityContextHolder.getContext().getAuthentication()==null){

          final UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);

          if(this.jwt.validateToken(jwtToken,userDetails)){

              UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

              usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

              SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
          }
       }else {

           System.out.println("Token is a not valid...");
       }

       filterChain.doFilter(request,response);

    }
}
