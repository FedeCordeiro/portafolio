import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  birthDate: Date = new Date('1995-08-25'); //Fecha de nacimiento
  age: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateAge();
  }

  calculateAge(): void {
    const today = new Date(); //Fecha actual
    const birthDate = new Date(this.birthDate); //Fecha de nacimiento

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    //Si aún no se cumplieron años, en el año actual
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.age = age;
  }

}
