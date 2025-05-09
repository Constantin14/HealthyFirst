package HealthyFirst.services;

import HealthyFirst.models.Food;

import java.util.List;

public interface FoodService {
    List<Food> getFoodList();

    Food getFoodById (Integer id);

    List <Food> getFoodByFoodType (String foodType);

    List <Food> getFoodByFoodName (String foodName);
}
