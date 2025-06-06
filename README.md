# Healthy First

This repository contains the front-end and back-end code of my HealthyFirst application. The front end was build using Angular with VS Code and the back-end was build using Spring Boot with IntelliJ IDEA. In order to respect a minimum security requirements the application should use Spring Security for securing back-end. This application is using PostgreSQL for database.

This application was created based on information from "Forever Strong" by Dr. Gabrielle Lyon and contains:
- A database with the amount of macronutrients of essential foods that are divided into several categories, which can be easily seen thanks to the filters in the application.
- The possibility of creating a personalized food program depending on the proposed objective, if you want to lose, maintain or gain body weight, the number of kilograms and physical activity.
- The application calculates the number of macronutrients and kcal for each meal depending on the information received from the user.
- A sports program, which contains links for each exercise, so that they can be executed correctly, which can be applied both at home and in fitness rooms.

Application Requirements

- The application shall allow users to create an account.
- In order to access the features of HealthyFirst, users must log in.
- Users shall be able to log out manually at any time.
- The application shall automatically log out users after 30 minutes of inactivity.
- The application shall include a database containing a list of foods.
- The application shall provide filters (e.g., category, calories, macronutrients) to search the food list.
- The application shall include a calculator for daily calories and macronutrient needs.
- Users shall be able to choose a goal: lose weight, maintain weight, or gain weight.
- The calculator shall accept user inputs such as body weight and physical activity level.
- The application shall calculate the daily required intake of calories and macronutrients (protein, carbohydrates, fats).
- The application shall generate a meal plan with four meals per day for each day of the week.
- The distribution of protein, carbohydrates, and fats shall be based on recommendations from the book Forever Strong.
- The application shall provide a workout plan, including links to videos or descriptions for each exercise.

Below are some images from the application, we can see an example of a personalized food program for a person with a body weight of 75 kg who exercises three times a week and has his first meal at 11 am and want to maintain body weight.
You can see some details in the generated table, such as: 
- Meals before and after sports have less fat
- The number of carbohydrates is lower before sports and higher after sports
- The number of proteins consumed after sports is lower, this meal can be replaced with a protein shake.
![User](https://github.com/user-attachments/assets/643a2b44-0886-4a06-ba41-1e5c840d195e)
![FoodList](https://github.com/user-attachments/assets/51a3063b-2fde-4835-8a47-4bfff8998b0b)
![LoseKeepGain](https://github.com/user-attachments/assets/408f9d6b-029e-4716-8ff7-863cc3f06224)
![SportInterval](https://github.com/user-attachments/assets/2a01b87a-2496-400a-a8be-e1253a1d7de8)
![DietTable](https://github.com/user-attachments/assets/161b652f-1809-4337-acea-1c36b8404a21)
![SportProgram](https://github.com/user-attachments/assets/2af4c586-7bae-450a-9eb5-c0406d908f57)



