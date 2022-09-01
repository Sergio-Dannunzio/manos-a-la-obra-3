import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  a = true;

  getClass(){
      if(document.body.className == 'dark-theme') {
        return false;
      }else
      return true;
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }
}