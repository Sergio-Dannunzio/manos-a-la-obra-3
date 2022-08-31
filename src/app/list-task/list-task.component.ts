import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  
  tasks: string[];
  
  constructor() { 
    this.tasks = [];
  }
  
  /* Cuando se clickea el checkbox se tacha la tarea como completada,
     Si la tarea ya esta tachada y se vuelve a clickear el checkbox se destacha */
  taskCompleted(self: HTMLElement): void {
    if(self.className == "crossOut"){
      self.className = "";
    }else{
      self.className = "crossOut";
    }
  }

  /* Remueve la tarea cuando se clickea en el boton del tacho de basura */
  remove(index: number): void {
    this.tasks.splice(index,1);
  }

  /* Agrega la tarea que se escribio en el input */
  addItem(newItem: string) {
    if (newItem != "") {
      this.tasks.push(newItem);
    }
  }

  ngOnInit(): void {
  }

}
