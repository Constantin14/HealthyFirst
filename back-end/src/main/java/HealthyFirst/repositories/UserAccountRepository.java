package HealthyFirst.repositories;

import HealthyFirst.models.UserAccount2;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserAccountRepository extends JpaRepository<UserAccount2, Integer> {
    Optional<UserAccount2> findByUsername(String username);
}
