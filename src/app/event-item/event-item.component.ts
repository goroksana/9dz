import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  @Input() name:string="";
  @Input() date:string="";
  @Input() description:string="";

}
