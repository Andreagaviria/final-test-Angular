import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  // let ciudadesDelPais: number[]
  // ciudadesDelPais = [1,5,7,3,7]


  // let familia: string[]
  // familia = ['papá', 'mamá', 'hermano', 'hermana', 'primo']

  constructor() { }


  ngOnInit(): void {
  }

}
