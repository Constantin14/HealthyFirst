package HealthyFirst.services;

import HealthyFirst.exception.ResourceNotFoundException;
import HealthyFirst.models.Food;
import HealthyFirst.repositories.FakeFoodRepository;
import HealthyFirst.repositories.FoodRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl {

    private final FakeFoodRepository fakeFoodRepository;
    private final FoodRepository foodRepository;

    public FoodServiceImpl(FakeFoodRepository fakeFoodRepository, FoodRepository foodRepository) {
        this.fakeFoodRepository = fakeFoodRepository;
        this.foodRepository = foodRepository;
    }

    public List<Food> getFoodList() {
        return foodRepository.findAll();
    }

    public Food getFoodById(Integer id){
        return foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food with id" + id + "not found" ));
    }

    public List<Food> getFoodByFoodType(String foodType) {
        return foodRepository.findAllFoodByFoodType(foodType);
    }
    public List<Food> getFoodByFoodName(String foodName) {
        return foodRepository.findFoodByName(foodName);}
    }
