package HealthyFirst.controllers;

import HealthyFirst.models.Food;
import HealthyFirst.services.FoodServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/foodList")
public class FoodController {

    private final FoodServiceImpl foodService;

    public FoodController(FoodServiceImpl foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/all")
    public List<Food> getAllFood() {
        return foodService.getFoodList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable("id") Integer id) {
        Food food = foodService.getFoodById(id);
        return ResponseEntity.ok().body(food);
    }

    @GetMapping("/all/{foodType}")
    public ResponseEntity<List<Food>> getFoodByFoodType(@PathVariable("foodType") String foodType){
        List<Food> food = foodService.getFoodByFoodType(foodType);
        return ResponseEntity.ok().body(food);
    }

    @GetMapping("/search/{foodName}")
    public ResponseEntity<List<Food>> getFoodByFoodName(@PathVariable("foodName") String foodName){
        List<Food> food = foodService.getFoodByFoodName(foodName);
        return ResponseEntity.ok().body(food);
    }
}
