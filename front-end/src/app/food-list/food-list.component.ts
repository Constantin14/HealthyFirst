import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodListService } from './food-list.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-food-list',
  imports: [FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit {

  allFood!: Food[];
  foodType:string="";
  foodFilter:string="";
  foodName:string="";
  searchText: string = '';
  constructor(private service:FoodListService, private router: Router){

  }

  ngOnInit(): void {
      this.service.getFoodList().subscribe((res) =>{
        this.allFood=res;
      });
  }

  getAllFood(){
      this.service.getFoodList().subscribe((res) => {
        this.allFood = res;
      })
  }

  getAllCarbs(){
    this.foodFilter = 'Carbo';
    if (this.foodFilter == 'Carbo') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  getAllVegy(){
    this.foodFilter = 'Vegetable';
    if (this.foodFilter == 'Vegetable') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  getAllFruits(){
    this.foodFilter = 'Fruit';
    if (this.foodFilter == 'Fruit') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  getAllMeat(){
    this.foodFilter = 'Meat';
    if (this.foodFilter == 'Meat') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  getAllProteins(){
    this.foodFilter = 'Protein';
    if (this.foodFilter == 'Protein') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  getAllFats(){
    this.foodFilter = 'Fats';
    if (this.foodFilter == 'Fats') {
      this.service.getFoodByType(this.foodFilter).subscribe((res) => {
      this.allFood = res;
      });
    }
  }

  filteredFoods(): Food[] {
    return this.allFood.filter(food =>
      food.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
