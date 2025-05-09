package HealthyFirst.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodId;
    private String name;
    private String foodType;
    private double proteinNum;
    private double fatsNum;
    private double carbsNum;
    private double fibreNum;
    private double calsNum;

    public Food(){}

    public Food(String name, String foodType, double proteinNum, double fatsNum, double carbsNum, double fibreNum, double calsNum) {
        this.name = name;
        this.foodType = foodType;
        this.proteinNum = proteinNum;
        this.fatsNum = fatsNum;
        this.carbsNum = carbsNum;
        this.fibreNum = fibreNum;
        this.calsNum = calsNum;
    }

    public Food(int foodId, String name, String foodType, double proteinNum, double fatsNum, double carbsNum, double fibreNum, double calsNum) {
        this.foodId = foodId;
        this.name = name;
        this.foodType = foodType;
        this.proteinNum = proteinNum;
        this.fatsNum = fatsNum;
        this.carbsNum = carbsNum;
        this.fibreNum = fibreNum;
        this.calsNum = calsNum;
    }

    public int getFoodId() {
        return foodId;
    }

    public String getName() {
        return name;
    }

    public String getFoodType() {
        return foodType;
    }

    public double getProteinNum() {
        return proteinNum;
    }

    public double getFatsNum() {
        return fatsNum;
    }

    public double getCarbsNum() {
        return carbsNum;
    }

    public double getFibreNum() {
        return fibreNum;
    }

    public double getCalsNum() {
        return calsNum;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public void setProteinNum(double proteinNum) {
        this.proteinNum = proteinNum;
    }

    public void setFatsNum(double fatsNum) {
        this.fatsNum = fatsNum;
    }

    public void setCarbsNum(double carbsNum) {
        this.carbsNum = carbsNum;
    }

    public void setFibreNum(double fibreNum) {
        this.fibreNum = fibreNum;
    }

    public void setCalsNum(double calsNum) {
        this.calsNum = calsNum;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Food food = (Food) o;
        return foodId == food.foodId && Double.compare(proteinNum, food.proteinNum) == 0 && Double.compare(fatsNum, food.fatsNum) == 0 && Double.compare(carbsNum, food.carbsNum) == 0 && Double.compare(fibreNum, food.fibreNum) == 0 && Double.compare(calsNum, food.calsNum) == 0 && Objects.equals(name, food.name) && Objects.equals(foodType, food.foodType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(foodId, name, foodType, proteinNum, fatsNum, carbsNum, fibreNum, calsNum);
    }
}
