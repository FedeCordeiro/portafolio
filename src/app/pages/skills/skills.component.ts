import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  items = [
    {
      name: 'Frontend',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'CSS', src: './assets/icons/css-3.svg' },
        { name: 'Sass', src: './assets/icons/sass.svg' },
        { name: 'Bootstrap', src: './assets/icons/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/icons/js2.svg' },
        { name: 'Angular', src: './assets/icons/angular.svg' },
      ],
    },
    {
      name: 'Backend',
      tecnology: [
        { name: 'PHP', src: './assets/icons/php.svg' },
        { name: 'Java', src: './assets/icons/java.svg' },
        { name: 'MySQL', src: './assets/icons/mysql.svg' },
        { name: 'Postgres', src: './assets/icons/postgres.svg' },
      ],
    },
    {
      name: 'Herramientas',
      tecnology: [
        { name: 'Git', src: './assets/icons/git.svg' },
        { name: 'GitHub', src: './assets/icons/github.svg' },
        { name: 'GitLab', src: './assets/icons/gitlab.svg' },
        { name: 'VSCode', src: './assets/icons/vscode.svg' },
        { name: 'Postman', src: './assets/icons/postman.svg' },
        { name: 'Trello', src: './assets/icons/trello.svg' },
        { name: 'Vercel', src: './assets/icons/vercel.svg' },
      ],
    },
  ];
}
