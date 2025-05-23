package HealthyFirst.repositories;

import HealthyFirst.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {

    List<Food> findAllFoodByFoodType(String foodType);
    List<Food> findFoodByName(String foodName);
}
