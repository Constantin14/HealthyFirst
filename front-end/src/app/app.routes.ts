import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { NgModule } from '@angular/core';
import { DietComponent } from './diet/diet.component';
import { LoseWeightComponent } from './lose-weight/lose-weight.component';
import { KeepWeightComponent } from './keep-weight/keep-weight.component';
import { GainWeightComponent } from './gain-weight/gain-weight.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { AuthGuard } from './guards/auth-guard.service';
import { MenuComponent } from './menu/menu.component';
import { SportComponent } from './sport/sport.component';
import { LoginSubmitComponent } from './login-submit/login-submit.component';


export const routes: Routes = [
    {path: 'foodlist-page', component: FoodListComponent},
    {path: 'home-page', component: HomeComponent},
    {path: 'diet-page', component: DietComponent},
    {path: 'lose-page', component: LoseWeightComponent},
    {path: 'keep-page', component: KeepWeightComponent},
    {path: 'gain-page', component: GainWeightComponent},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'logout-page', component: LogoutPageComponent},
    {path: 'submit-page', component: SubmitPageComponent},
    {path: 'login-submit', component: LoginSubmitComponent},
    {path: 'menu-page', component: MenuComponent},
    {path: 'sport-page', component: SportComponent},
    {path: '', redirectTo: '/login-submit', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
