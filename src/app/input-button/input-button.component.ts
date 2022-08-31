import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent {

  constructor() { }

  @Output() newTaskEvent = new EventEmitter<string>();

  addNewTask(value: string) {
    this.newTaskEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
