import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DailyMeals } from '../dailyMeals';
import { SportWeek } from '../sportWeek';

@Component({
  selector: 'app-gain-weight',
  imports: [FormsModule],
  templateUrl: './gain-weight.component.html',
  styleUrl: './gain-weight.component.css'
})
export class GainWeightComponent {
  bodyW!: number;
    fatsNum: number = 0;
    dailyMealWork!: number;
    activeDays: SportWeek;
    sportDayCounter: number = 0;
    mondayMeals: DailyMeals;
    tuesdayMeals: DailyMeals;
    wednesdayMeals: DailyMeals;
    thursdayMeals: DailyMeals;
    fridayMeals: DailyMeals;
    saturdayMeals: DailyMeals;
    sundayMeals: DailyMeals;
    mealsVariable!: number;
  
  
    constructor(private router: Router){
      this.activeDays = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
  
      this.mondayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.tuesdayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.wednesdayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.thursdayMeals = {
        
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.fridayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.saturdayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
  
      this.sundayMeals = {
        beforeFirstMeal: false,
        beforeSecondMeal: false,
        beforeThirdMeal: false,
        beforeFourthMeal: false,
        afterFourthMeal: false
      }
    }

    firstMealMondayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealMondayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealMondayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealMondayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealMondayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealMondayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealMondayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealMondayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealMondayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealMondayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealMondayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealMondayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealTuesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealTuesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealTuesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealTuesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealWednesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealWednesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealWednesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealWednesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealThursdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealThursdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealThursdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealThursdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealThursdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealThursdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealThursdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealThursdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealFridayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealFridayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealFridayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealFridayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealFridayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealFridayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealFridayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealFridayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealFridayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealFridayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealFridayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealFridayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealSaturdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealSaturdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealSaturdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealSaturdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealSundayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    secondMealSundayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    thirdMealSundayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    fourthMealSundayCarb1(){
      this.mealsVariable = this.calcMealCarb1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS1();
      } else 
      this.mealsVariable = this.calcMealCarb1();
      return this.mealsVariable;
    }
  
    firstMealSundayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    secondMealSundayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    thirdMealSundayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    fourthMealSundayProt1(){
      this.mealsVariable = this.calcEqualMealProt1();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt1();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt1();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt1();
      } else 
      this.mealsVariable = this.calcEqualMealProt1();
      return this.mealsVariable;
    }
  
    firstMealSundayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    secondMealSundayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats1Min(){
      this.mealsVariable = this.calcEqualMealFats1Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Min();
      return this.mealsVariable;
    }
  
    firstMealSundayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    secondMealSundayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats1Max(){
      this.mealsVariable = this.calcEqualMealFats1Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats1Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats1Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats1Max();
      return this.mealsVariable;
    }
  
    firstMealMondayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
  
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealMondayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealMondayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealMondayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealMondayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealMondayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealMondayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealMondayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealMondayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealMondayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealMondayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealMondayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealTuesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealTuesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealTuesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealTuesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealWednesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealWednesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealWednesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealWednesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealThursdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealThursdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealThursdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealThursdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealThursdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealThursdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealThursdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealThursdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealFridayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealFridayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealFridayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealFridayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealFridayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealFridayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealFridayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealFridayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealFridayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealFridayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealFridayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealFridayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealSaturdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealSaturdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealSaturdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealSaturdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealSundayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    secondMealSundayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    thirdMealSundayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    fourthMealSundayCarb2(){
      this.mealsVariable = this.calcMealCarb2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS2();
      } else 
      this.mealsVariable = this.calcMealCarb2();
      return this.mealsVariable;
    }
  
    firstMealSundayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    secondMealSundayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    thirdMealSundayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    fourthMealSundayProt2(){
      this.mealsVariable = this.calcEqualMealProt2();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt2();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt2();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt2();
      } else 
      this.mealsVariable = this.calcEqualMealProt2();
      return this.mealsVariable;
    }
  
    firstMealSundayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    secondMealSundayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats2Min(){
      this.mealsVariable = this.calcEqualMealFats2Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Min();
      return this.mealsVariable;
    }
  
    firstMealSundayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    secondMealSundayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats2Max(){
      this.mealsVariable = this.calcEqualMealFats2Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats2Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats2Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats2Max();
      return this.mealsVariable;
    }
  
    firstMealMondayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealMondayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealMondayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealMondayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealMondayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealMondayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealMondayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealMondayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealMondayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealMondayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealMondayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealMondayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealTuesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealTuesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealTuesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealTuesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealWednesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealWednesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealWednesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealWednesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealThursdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealThursdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealThursdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealThursdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealThursdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealThursdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealThursdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealThursdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealFridayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealFridayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealFridayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealFridayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealFridayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealFridayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealFridayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealFridayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealFridayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealFridayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealFridayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealFridayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealSaturdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealSaturdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealSaturdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealSaturdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealSundayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    secondMealSundayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    thirdMealSundayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    fourthMealSundayCarb3(){
      this.mealsVariable = this.calcMealCarb3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS3();
      } else 
      this.mealsVariable = this.calcMealCarb3();
      return this.mealsVariable;
    }
  
    firstMealSundayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    secondMealSundayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    thirdMealSundayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    fourthMealSundayProt3(){
      this.mealsVariable = this.calcEqualMealProt3();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt3();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt3();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt3();
      } else 
      this.mealsVariable = this.calcEqualMealProt3();
      return this.mealsVariable;
    }
  
    firstMealSundayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    secondMealSundayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats3Min(){
      this.mealsVariable = this.calcEqualMealFats3Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Min();
      return this.mealsVariable;
    }
  
    firstMealSundayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    secondMealSundayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats3Max(){
      this.mealsVariable = this.calcEqualMealFats3Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats3Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats3Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats3Max();
      return this.mealsVariable;
    }
  
    firstMealMondayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
  
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealMondayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealMondayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealMondayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealMondayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealMondayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealMondayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealMondayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealMondayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealMondayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealMondayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealMondayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealMondayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealMondayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.monday){
        if(this.mondayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.mondayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.mondayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealTuesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealTuesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealTuesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealTuesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealTuesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealTuesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealTuesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealTuesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.tuesday){
        if(this.tuesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.tuesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.tuesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealWednesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealWednesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealWednesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealWednesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealWednesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealWednesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealWednesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealWednesdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.wednesday){
        if(this.wednesdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.wednesdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.wednesdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealThursdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealThursdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealThursdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealThursdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealThursdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealThursdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealThursdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealThursdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealThursdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealThursdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealThursdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealThursdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.thursday){
        if(this.thursdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.thursdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.thursdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealFridayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealFridayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealFridayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealFridayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealFridayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealFridayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealFridayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealFridayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealFridayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealFridayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.thursdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealFridayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealFridayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealFridayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealFridayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.friday){
        if(this.fridayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.fridayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.fridayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealSaturdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealSaturdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealSaturdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealSaturdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealSaturdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealSaturdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealSaturdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealSaturdayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.saturday){
        if(this.saturdayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.saturdayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.saturdayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    firstMealSundayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    secondMealSundayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    thirdMealSundayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarb4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    fourthMealSundayCarb4(){
      this.mealsVariable = this.calcMealCarb4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealCarb4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealCarbAfterS4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealCarbBeforeS4();
      } else 
      this.mealsVariable = this.calcMealCarb4();
      return this.mealsVariable;
    }
  
    firstMealSundayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    secondMealSundayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    thirdMealSundayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    fourthMealSundayProt4(){
      this.mealsVariable = this.calcEqualMealProt4();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealProt4();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealAfterSportProt4();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealProt4();
      } else 
      this.mealsVariable = this.calcEqualMealProt4();
      return this.mealsVariable;
    }
  
    firstMealSundayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    secondMealSundayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats4Min(){
      this.mealsVariable = this.calcEqualMealFats4Min();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Min();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Min();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Min();
      return this.mealsVariable;
    }
  
    firstMealSundayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    secondMealSundayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    thirdMealSundayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }
  
    fourthMealSundayFats4Max(){
      this.mealsVariable = this.calcEqualMealFats4Max();
      if(this.activeDays.sunday){
        if(this.sundayMeals.beforeFirstMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.beforeSecondMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeThirdMeal)
          this.mealsVariable = this.calcMealFats4Max();
        if(this.sundayMeals.beforeFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
        if(this.sundayMeals.afterFourthMeal)
          this.mealsVariable = this.calcMealSportFats4Max();
      } else 
      this.mealsVariable = this.calcEqualMealFats4Max();
      return this.mealsVariable;
    }

    resetMondayCheckBox1(){
      this.mondayMeals.beforeSecondMeal = false;
      this.mondayMeals.beforeThirdMeal = false;
      this.mondayMeals.beforeFourthMeal = false;
      this.mondayMeals.afterFourthMeal = false;
    }
  
    resetMondayCheckBox2(){
      this.mondayMeals.beforeFirstMeal = false;
      this.mondayMeals.beforeThirdMeal = false;
      this.mondayMeals.beforeFourthMeal = false;
      this.mondayMeals.afterFourthMeal = false;
    }
  
    resetMondayCheckBox3(){
      this.mondayMeals.beforeFirstMeal = false;
      this.mondayMeals.beforeSecondMeal = false;
      this.mondayMeals.beforeFourthMeal = false;
      this.mondayMeals.afterFourthMeal = false;
    }
  
    resetMondayCheckBox4(){
      this.mondayMeals.beforeFirstMeal = false;
      this.mondayMeals.beforeSecondMeal = false;
      this.mondayMeals.beforeThirdMeal = false;
      this.mondayMeals.afterFourthMeal = false;
    }
  
    resetMondayCheckBox5(){
      this.mondayMeals.beforeFirstMeal = false;
      this.mondayMeals.beforeSecondMeal = false;
      this.mondayMeals.beforeThirdMeal = false;
      this.mondayMeals.beforeFourthMeal = false;
    }
  
    resetTuesdayCheckBox1(){
      this.tuesdayMeals.beforeSecondMeal = false;
      this.tuesdayMeals.beforeThirdMeal = false;
      this.tuesdayMeals.beforeFourthMeal = false;
      this.tuesdayMeals.afterFourthMeal = false;
    }
  
    resetTuesdayCheckBox2(){
      this.tuesdayMeals.beforeFirstMeal = false;
      this.tuesdayMeals.beforeThirdMeal = false;
      this.tuesdayMeals.beforeFourthMeal = false;
      this.tuesdayMeals.afterFourthMeal = false;
    }
  
    resetTuesdayCheckBox3(){
      this.tuesdayMeals.beforeFirstMeal = false;
      this.tuesdayMeals.beforeSecondMeal = false;
      this.tuesdayMeals.beforeFourthMeal = false;
      this.tuesdayMeals.afterFourthMeal = false;
    }
  
    resetTuesdayCheckBox4(){
      this.tuesdayMeals.beforeFirstMeal = false;
      this.tuesdayMeals.beforeSecondMeal = false;
      this.tuesdayMeals.beforeThirdMeal = false;
      this.tuesdayMeals.afterFourthMeal = false;
    }
  
    resetTuesdayCheckBox5(){
      this.tuesdayMeals.beforeFirstMeal = false;
      this.tuesdayMeals.beforeSecondMeal = false;
      this.tuesdayMeals.beforeThirdMeal = false;
      this.tuesdayMeals.beforeFourthMeal = false;
    }
  
    resetWednesdayCheckBox1(){
      this.wednesdayMeals.beforeSecondMeal = false;
      this.wednesdayMeals.beforeThirdMeal = false;
      this.wednesdayMeals.beforeFourthMeal = false;
      this.wednesdayMeals.afterFourthMeal = false;
    }
  
    resetWednesdayCheckBox2(){
      this.wednesdayMeals.beforeFirstMeal = false;
      this.wednesdayMeals.beforeThirdMeal = false;
      this.wednesdayMeals.beforeFourthMeal = false;
      this.wednesdayMeals.afterFourthMeal = false;
    }
  
    resetWednesdayCheckBox3(){
      this.wednesdayMeals.beforeFirstMeal = false;
      this.wednesdayMeals.beforeSecondMeal = false;
      this.wednesdayMeals.beforeFourthMeal = false;
      this.wednesdayMeals.afterFourthMeal = false;
    }
  
    resetWednesdayCheckBox4(){
      this.wednesdayMeals.beforeFirstMeal = false;
      this.wednesdayMeals.beforeSecondMeal = false;
      this.wednesdayMeals.beforeThirdMeal = false;
      this.wednesdayMeals.afterFourthMeal = false;
    }
  
    resetWednesdayCheckBox5(){
      this.wednesdayMeals.beforeFirstMeal = false;
      this.wednesdayMeals.beforeSecondMeal = false;
      this.wednesdayMeals.beforeThirdMeal = false;
      this.wednesdayMeals.beforeFourthMeal = false;
    }
  
    resetThursdayCheckBox1(){
      this.thursdayMeals.beforeSecondMeal = false;
      this.thursdayMeals.beforeThirdMeal = false;
      this.thursdayMeals.beforeFourthMeal = false;
      this.thursdayMeals.afterFourthMeal = false;
    }
  
    resetThursdayCheckBox2(){
      this.thursdayMeals.beforeFirstMeal = false;
      this.thursdayMeals.beforeThirdMeal = false;
      this.thursdayMeals.beforeFourthMeal = false;
      this.thursdayMeals.afterFourthMeal = false;
    }
  
    resetThursdayCheckBox3(){
      this.thursdayMeals.beforeFirstMeal = false;
      this.thursdayMeals.beforeSecondMeal = false;
      this.thursdayMeals.beforeFourthMeal = false;
      this.thursdayMeals.afterFourthMeal = false;
    }
  
    resetThursdayCheckBox4(){
      this.thursdayMeals.beforeFirstMeal = false;
      this.thursdayMeals.beforeSecondMeal = false;
      this.thursdayMeals.beforeThirdMeal = false;
      this.thursdayMeals.afterFourthMeal = false;
    }
  
    resetThursdayCheckBox5(){
      this.thursdayMeals.beforeFirstMeal = false;
      this.thursdayMeals.beforeSecondMeal = false;
      this.thursdayMeals.beforeThirdMeal = false;
      this.thursdayMeals.beforeFourthMeal = false;
    }
  
    resetFridayCheckBox1(){
      this.fridayMeals.beforeSecondMeal = false;
      this.fridayMeals.beforeThirdMeal = false;
      this.fridayMeals.beforeFourthMeal = false;
      this.fridayMeals.afterFourthMeal = false;
    }
  
    resetFridayCheckBox2(){
      this.fridayMeals.beforeFirstMeal = false;
      this.fridayMeals.beforeThirdMeal = false;
      this.fridayMeals.beforeFourthMeal = false;
      this.fridayMeals.afterFourthMeal = false;
    }
  
    resetFridayCheckBox3(){
      this.fridayMeals.beforeFirstMeal = false;
      this.fridayMeals.beforeSecondMeal = false;
      this.fridayMeals.beforeFourthMeal = false;
      this.fridayMeals.afterFourthMeal = false;
    }
  
    resetFridayCheckBox4(){
      this.fridayMeals.beforeFirstMeal = false;
      this.fridayMeals.beforeSecondMeal = false;
      this.fridayMeals.beforeThirdMeal = false;
      this.fridayMeals.afterFourthMeal = false;
    }
  
    resetFridayCheckBox5(){
      this.fridayMeals.beforeFirstMeal = false;
      this.fridayMeals.beforeSecondMeal = false;
      this.fridayMeals.beforeThirdMeal = false;
      this.fridayMeals.beforeFourthMeal = false;
    }
  
    resetSaturdayCheckBox1(){
      this.saturdayMeals.beforeSecondMeal = false;
      this.saturdayMeals.beforeThirdMeal = false;
      this.saturdayMeals.beforeFourthMeal = false;
      this.saturdayMeals.afterFourthMeal = false;
    }
  
    resetSaturdayCheckBox2(){
      this.saturdayMeals.beforeFirstMeal = false;
      this.saturdayMeals.beforeThirdMeal = false;
      this.saturdayMeals.beforeFourthMeal = false;
      this.saturdayMeals.afterFourthMeal = false;
    }
  
    resetSaturdayCheckBox3(){
      this.saturdayMeals.beforeFirstMeal = false;
      this.saturdayMeals.beforeSecondMeal = false;
      this.saturdayMeals.beforeFourthMeal = false;
      this.saturdayMeals.afterFourthMeal = false;
    }
  
    resetSaturdayCheckBox4(){
      this.saturdayMeals.beforeFirstMeal = false;
      this.saturdayMeals.beforeSecondMeal = false;
      this.saturdayMeals.beforeThirdMeal = false;
      this.saturdayMeals.afterFourthMeal = false;
    }
  
    resetSaturdayCheckBox5(){
      this.saturdayMeals.beforeFirstMeal = false;
      this.saturdayMeals.beforeSecondMeal = false;
      this.saturdayMeals.beforeThirdMeal = false;
      this.saturdayMeals.beforeFourthMeal = false;
    }
  
    resetSundayCheckBox1(){
      this.sundayMeals.beforeSecondMeal = false;
      this.sundayMeals.beforeThirdMeal = false;
      this.sundayMeals.beforeFourthMeal = false;
      this.sundayMeals.afterFourthMeal = false;
    }
  
    resetSundayCheckBox2(){
      this.sundayMeals.beforeFirstMeal = false;
      this.sundayMeals.beforeThirdMeal = false;
      this.sundayMeals.beforeFourthMeal = false;
      this.sundayMeals.afterFourthMeal = false;
    }
  
    resetSundayCheckBox3(){
      this.sundayMeals.beforeFirstMeal = false;
      this.sundayMeals.beforeSecondMeal = false;
      this.sundayMeals.beforeFourthMeal = false;
      this.sundayMeals.afterFourthMeal = false;
    }
  
    resetSundayCheckBox4(){
      this.sundayMeals.beforeFirstMeal = false;
      this.sundayMeals.beforeSecondMeal = false;
      this.sundayMeals.beforeThirdMeal = false;
      this.sundayMeals.afterFourthMeal = false;
    }
  
    resetSundayCheckBox5(){
      this.sundayMeals.beforeFirstMeal = false;
      this.sundayMeals.beforeSecondMeal = false;
      this.sundayMeals.beforeThirdMeal = false;
      this.sundayMeals.beforeFourthMeal = false;
    }

    callMondayCounter(){
      if(this.activeDays.monday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callTuesdayCounter(){
      if(this.activeDays.tuesday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callWednesdayCounter(){
      if(this.activeDays.wednesday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callThursdayCounter(){
      if(this.activeDays.thursday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callFridayCounter(){
      if(this.activeDays.friday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callSaturdayCounter(){
      if(this.activeDays.saturday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }
  
    callSundayCounter(){
      if(this.activeDays.sunday == true)
        this.sportDayCounter--;
      else
        this.sportDayCounter++;
    }

    caloriesMinNumber(){
      return this.bodyW*36;
    }
  
    caloriesMaxNumber(){
      return this.bodyW*38;
    }
  
    calcFatsMin1(){
      return Math.round((23.2 * this.bodyW)/9);
    }
  
    calcFatsMin2(){
      return Math.round((21.6 * this.bodyW)/9); 
    }
  
    calcFatsMin3(){
      return Math.round((20 * this.bodyW)/9);
    }
  
    calcFatsMin4(){
      return Math.round((18.4 * this.bodyW)/9);
    }
  
    calcFatsMax1(){
      return Math.round((25.2 * this.bodyW)/9);
    }
  
    calcFatsMax2(){
      return Math.round((23.6 * this.bodyW)/9);
    }
  
    calcFatsMax3(){
      return Math.round((22 * this.bodyW)/9);
    }
  
    calcFatsMax4(){
      return Math.round((20.4 * this.bodyW)/9);
    }

    calcProtCarbNum1(){
      return Math.round(this.bodyW*1.6);
    }
  
    calcMealCarbBeforeS1(){
      return Math.round(this.calcProtCarbNum1()*0.2);
  }
  
    calcMealCarbAfterS1(){
      return Math.round(this.calcProtCarbNum1()*0.3);
  }
  
    calcMealCarb1(){
      return Math.round(this.calcProtCarbNum1()*0.25);
    }
  
    calcMealProt1(){
        return Math.round(this.calcProtCarbNum1()*0.2857);
    }
  
    calcMealAfterSportProt1(){
      return Math.round(this.calcProtCarbNum1()*0.1429);
  }
  
    calcEqualMealProt1(){
      return Math.round(this.calcProtCarbNum1()*0.25);
    }
  
    calcEqualMealFats1Min(){
      return Math.round(this.calcFatsMin1()*0.25);
    }
  
    calcEqualMealFats1Max(){
      return Math.round(this.calcFatsMax1()*0.25);
    }
  
    calcMealSportFats1Min(){
      return Math.round(this.calcFatsMin1()*0.2);
    }
  
    calcMealSportFats1Max(){
      return Math.round(this.calcFatsMax1()*0.2);
    }
  
    calcMealFats1Min(){
      return Math.round(this.calcFatsMin1()*0.3);
    }
  
    calcMealFats1Max(){
      return Math.round(this.calcFatsMax1()*0.3);
    }
  
    calcProtCarbNum2(){
      return Math.round(this.bodyW*1.8);
    }
  
    calcMealCarbBeforeS2(){
      return Math.round(this.calcProtCarbNum2()*0.2);
  }
  
    calcMealCarbAfterS2(){
      return Math.round(this.calcProtCarbNum2()*0.3);
  }
  
    calcMealCarb2(){
      return Math.round(this.calcProtCarbNum2()*0.25);
    }
  
    calcMealProt2(){
        return Math.round(this.calcProtCarbNum2()*0.2857);
    }
  
    calcMealAfterSportProt2(){
      return Math.round(this.calcProtCarbNum2()*0.1429);
  }
  
  calcEqualMealProt2(){
    return Math.round(this.calcProtCarbNum2()*0.25);
  }
  
  calcEqualMealFats2Min(){
    return Math.round(this.calcFatsMin2()*0.25);
  }
  
  calcEqualMealFats2Max(){
    return Math.round(this.calcFatsMax2()*0.25);
  }
  
    calcMealSportFats2Min(){
      return Math.round(this.calcFatsMin2()*0.2);
    }
  
    calcMealSportFats2Max(){
      return Math.round(this.calcFatsMax2()*0.2);
    }
  
    calcMealFats2Min(){
      return Math.round(this.calcFatsMin2()*0.3);
    }
  
    calcMealFats2Max(){
      return Math.round(this.calcFatsMax2()*0.3);
    }
  
    calcProtCarbNum3(){
      return Math.round(this.bodyW*2);
    }
  
    calcMealCarbBeforeS3(){
      return Math.round(this.calcProtCarbNum3()*0.2);
  }
  
    calcMealCarbAfterS3(){
      return Math.round(this.calcProtCarbNum3()*0.3);
  }
  
    calcMealCarb3(){
      return Math.round(this.calcProtCarbNum3()*0.25);
    }
  
    calcMealProt3(){
        return Math.round(this.calcProtCarbNum3()*0.2857);
    }
  
    calcMealAfterSportProt3(){
      return Math.round(this.calcProtCarbNum3()*0.1429);
  }
  
  calcEqualMealProt3(){
    return Math.round(this.calcProtCarbNum3()*0.25);
  }
  
  calcEqualMealFats3Min(){
    return Math.round(this.calcFatsMin3()*0.25);
  }
  
  calcEqualMealFats3Max(){
    return Math.round(this.calcFatsMax3()*0.25);
  }
  
    calcMealSportFats3Min(){
      return Math.round(this.calcFatsMin3()*0.2);
    }
  
    calcMealSportFats3Max(){
      return Math.round(this.calcFatsMax3()*0.2);
    }
  
    calcMealFats3Min(){
      return Math.round(this.calcFatsMin3()*0.3);
    }
  
    calcMealFats3Max(){
      return Math.round(this.calcFatsMax3()*0.3);
    }
  
    calcProtCarbNum4(){
      return Math.round(this.bodyW*2.2);
    }
  
    calcMealCarbBeforeS4(){
      return Math.round(this.calcProtCarbNum4()*0.2);
  }
  
    calcMealCarbAfterS4(){
      return Math.round(this.calcProtCarbNum4()*0.3);
  }
  
    calcMealCarb4(){
      return Math.round(this.calcProtCarbNum4()*0.25);
    }
  
    calcMealProt4(){
        return Math.round(this.calcProtCarbNum4()*0.2857);
    }
  
    calcMealAfterSportProt4(){
      return Math.round(this.calcProtCarbNum4()*0.1429);
  }
  calcEqualMealProt4(){
    return Math.round(this.calcProtCarbNum4()*0.25);
  }
  
  calcEqualMealFats4Min(){
    return Math.round(this.calcFatsMin4()*0.25);
  }
  
  calcEqualMealFats4Max(){
    return Math.round(this.calcFatsMax4()*0.25);
  }
  
    calcMealSportFats4Min(){
      return Math.round(this.calcFatsMin4()*0.2);
    }
  
    calcMealSportFats4Max(){
      return Math.round(this.calcFatsMax4()*0.2);
    }
  
    calcMealFats4Min(){
      return Math.round(this.calcFatsMin4()*0.3);
    }
  
    calcMealFats4Max(){
      return Math.round(this.calcFatsMax4()*0.3);
    }

  calcWorkMeal1(){
    let meal;
    meal = this.dailyMealWork*1;
    return meal;    
  }
  calcWorkMeal2(){
    let meal;
    meal  = this.dailyMealWork*1+3; 
    return meal;   
  }
  calcWorkMeal3(){
    let meal;
    meal  = this.dailyMealWork*1+6;  
    return meal;   
  }
  calcWorkMeal4(){
    let meal;
    meal  = this.dailyMealWork*1+9; 
    return meal;    
  }

  caloriesMeals1Min(){
    return Math.round(this.caloriesMinNumber()/4);
  }

  caloriesMeals1Max(){
    return Math.round(this.caloriesMaxNumber()/4);
  }

}
