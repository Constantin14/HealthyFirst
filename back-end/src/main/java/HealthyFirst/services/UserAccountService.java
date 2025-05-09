package HealthyFirst.services;

import HealthyFirst.dtos.RegisterAccountDTO;
import HealthyFirst.dtos.UserAccountDTO;
import HealthyFirst.models.UserAccount2;

public interface UserAccountService {
    UserAccountDTO getUserDetails(String username);

    UserAccount2 getUserAccountByUsername(String username);

    void registerUser(RegisterAccountDTO registerAccountDTO);

    void logoutUser();
}
