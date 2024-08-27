import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { EventItemComponent } from './event-item/event-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, EventItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  events = [
    { name: "Angular Workshop", date: "2024-09-01", description: "A workshop on Angular fundamentals and advanced topics." },
    { name: "React Conference", date: "2024-10-15", description: "A conference focused on React and its ecosystem." },
    { name: "JavaScript Meetup", date: "2024-08-30", description: "An informal meetup for JavaScript developers." },
    { name: "TypeScript Bootcamp", date: "2024-11-05", edescription: "An intensive bootcamp to learn TypeScript from scratch." },
    { name: "Web Development Summit", date: "2024-12-20", description: "A summit covering the latest trends in web development." }
  ];

}
