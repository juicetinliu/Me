import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  projects: Project[];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Project 1',
        description: 'This is a description for project 1. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 2',
        description: 'This is a description for project 2. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 3',
        description: 'This is a description for project 3. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 4',
        description: 'This is a description for project 4. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 5',
        description: 'This is a description for project 5. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 6',
        description: 'This is a description for project 6. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 7',
        description: 'This is a description for project 7. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 8',
        description: 'This is a description for project 8. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 9',
        description: 'This is a description for project 9. Put the short description here',
        url: 'string',
        image: 'string',
      },
      {
        title: 'Project 10',
        description: 'This is a description for project 10. Put the short description here',
        url: 'string',
        image: 'string',
      },

    ]
  }

}
