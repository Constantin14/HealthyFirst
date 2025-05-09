package HealthyFirst.services;

import HealthyFirst.dtos.RegisterAccountDTO;
import HealthyFirst.dtos.UserAccountDTO;
import HealthyFirst.exception.ResourceNotFoundException;
import HealthyFirst.models.UserAccount2;
import HealthyFirst.repositories.UserAccountRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserAccountServiceImpl implements UserAccountService{
    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;

    public UserAccountServiceImpl(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserAccountDTO getUserDetails(String username) {
        UserAccount2 byUsername = userAccountRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found, " + username));
        return new UserAccountDTO()
                .setUsername(byUsername.getUsername())
                .setAuthorities(byUsername.getAuthorities());
    }

    public UserAccount2 getUserAccountByUsername(String username) {
        return userAccountRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found, " + username));
    }

    public void registerUser(RegisterAccountDTO registerAccountDTO) {
        UserAccount2 userAccount = new UserAccount2();
        userAccount.setUsername(registerAccountDTO.getUsername());
        userAccount.setPassword(passwordEncoder.encode(registerAccountDTO.getPassword()));
        userAccountRepository.save(userAccount);
    }

    public void logoutUser() {
        SecurityContextHolder.clearContext();
    }
}
