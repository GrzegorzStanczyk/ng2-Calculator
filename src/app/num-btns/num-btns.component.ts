import { Component, OnInit } from '@angular/core';

const BUTTONS: Array<any> = [
    {key: 'CE'},
    {key: 'C'},
    {key: '<'},
    {key: '/'},
    {key: '7'},
    {key: '8'},
    {key: '9'},
    {key: '*'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '-'},
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '+'},
    {key: 'null'},
    {key: '0'},
    {key: ','},
    {key: '='}
  ]; 

@Component({
  selector: 'app-num-btns',
  templateUrl: './num-btns.component.html',
  styleUrls: ['./num-btns.component.scss']
})


export class NumBtnsComponent implements OnInit {
  buttons = BUTTONS;

  // buttons: Array<any> = [
  //   {key: 'CE', val: this.clearClick()},
  //   {key: 'C', val: this.clearClick()},
  //   {key: '&#8678;',val: this.undoLast()},
  //   {key: '/', val: this.actionClick('/')},
  //   {key: '7', val: this.numberClick(7)},
  //   {key: '8', val: this.numberClick(8)},
  //   {key: '9', val: this.numberClick(9)},
  //   {key: '*', val: this.actionClick('*')},
  //   {key: '4', val: this.numberClick(4)},
  //   {key: '5', val: this.numberClick(5)},
  //   {key: '6', val: this.numberClick(6)},
  //   {key: '-', val: this.actionClick('-')},
  //   {key: '1', val: this.numberClick(1)},
  //   {key: '2', val: this.numberClick(2)},
  //   {key: '3', val: this.numberClick(3)},
  //   {key: '+', val: this.actionClick('+')},
  //   {key: 'null;',val: this.undoLast()},
  //   {key: '0', val: this.numberClick(0)},
  //   {key: ',', val: this.actionClick(',')},
  //   {key: '=', val: this.actionClick('=')}
  // ];
  
  constructor() { }

  ngOnInit() {
  }

}
