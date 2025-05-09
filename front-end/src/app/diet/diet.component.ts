import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-diet',
  imports: [FormsModule, RouterLink],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {
  constructor(private router: Router){}
}
