package HealthyFirst.controllers;


import HealthyFirst.dtos.RegisterAccountDTO;
import HealthyFirst.dtos.UserAccountDTO;
import HealthyFirst.services.UserAccountService;
import HealthyFirst.services.UserAccountServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserAccountController {
    private final UserAccountService userAccountServiceImpl;

    public UserAccountController(UserAccountServiceImpl userAccountServiceImpl) {
        this.userAccountServiceImpl = userAccountServiceImpl;
    }

    @GetMapping("/details")
    public ResponseEntity<UserAccountDTO> getUserDetails() {
        return ResponseEntity.ok(userAccountServiceImpl.getUserDetails(SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterAccountDTO registerAccountDTO) {
        userAccountServiceImpl.registerUser(registerAccountDTO);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        userAccountServiceImpl.logoutUser();
        return ResponseEntity.ok().build();
    }
}
