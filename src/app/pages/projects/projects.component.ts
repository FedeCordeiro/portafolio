import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  items = [
    {
      name: 'Boca Indumentaria',
      src: './assets/img/bocaIndumentaria.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
        { name: 'Angular', src: './assets/icons/angular.svg' },
      ],
      link: 'https://boca-indumentaria-angular.vercel.app/',
      github: 'https://github.com/FedeCordeiro/SeminarioAngular'
    },
    {
      name: 'Search GIFs',
      src: './assets/img/searchGif.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
        { name: 'Angular', src: './assets/icons/angular.svg' },
      ],
      link: 'https://gif-search-alpha.vercel.app/',
      github: 'https://github.com/FedeCordeiro/GifSearch'
    },
    {
      name: 'Cine Trends',
      src: './assets/img/cineTrends.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
      ],
      link: 'https://fedecordeiro.github.io/CineTrends.github.io/',
      github: 'https://github.com/FedeCordeiro/CineTrends.github.io'
    },
    {
      name: 'Airline',
      src: './assets/img/airline.jpg',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'PHP', src: './assets/icons/php.svg' },
        { name: 'MySQL', src: './assets/icons/mysql.svg' },
      ],
      link: ' ',
      github: 'https://github.com/FedeCordeiro/Airline'
    },
    {
      name: 'Airline API',
      src: './assets/img/airline.jpg',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'PHP', src: './assets/icons/php.svg' },
        { name: 'MySQL', src: './assets/icons/mysql.svg' },
        { name: 'Postman', src: './assets/icons/postman.svg' },
      ],
      link: ' ',
      github: 'https://github.com/FedeCordeiro/AirlineAPI'
    },
    {
      name: 'Gestion Asegurados',
      src: './assets/img/asegurados.jpg',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'PHP', src: './assets/icons/php.svg' },
        { name: 'MySQL', src: './assets/icons/mysql.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
      ],
      link: ' ',
      github: 'https://github.com/FedeCordeiro/App-Asegurados'
    },
    {
      name: 'La Favorita',
      src: './assets/img/lafav.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
        { name: 'Angular', src: './assets/icons/angular.svg' },
      ],
      link: 'https://la-favorita.vercel.app/',
      github: 'https://github.com/FedeCordeiro/App-LaFavorita'
    },    
    {
      name: 'Coscu Army Awards',
      src: './assets/img/caa.jpeg',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
        { name: 'Angular', src: './assets/icons/angular.svg' },
      ],
      link: 'https://awards-ca.vercel.app/',
      github: 'https://github.com/FedeCordeiro/AwardsCA'
    },
  ]
}