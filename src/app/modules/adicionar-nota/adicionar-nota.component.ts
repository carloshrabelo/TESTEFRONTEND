import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adicionar-nota',
  templateUrl: './adicionar-nota.component.html',
  styleUrls: ['./adicionar-nota.component.scss']
})
export class AdicionarNotaComponent implements OnInit {

  @Output()
  nota = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
