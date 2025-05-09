package HealthyFirst.repositories;

import HealthyFirst.models.Food;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeFoodRepository {
    List<Food> fakeFoodRepository = new ArrayList<>();

    public FakeFoodRepository() {
        Food f1 = new Food("Afine", "Fructe", 01.2, 1.0, 1.0 ,1, 1);
        Food f2 = new Food("Cotlet de Porc", "Carne", 1, 1, 1, 1, 1);
        Food f3 = new Food("Castravete", "Legume", 1, 1, 1 ,1 ,1);

        fakeFoodRepository.add(f1);
        fakeFoodRepository.add(f2);
        fakeFoodRepository.add(f3);
    }

    public List<Food> getFood() {
        return this.fakeFoodRepository;
    }

    public Food findFoodById(Integer id) {
        return this.fakeFoodRepository.get(id);
    }

}
