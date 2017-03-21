import { Component } from '@angular/core';

export class BTN {
  key: string;
  val: any;
}

// const BUTTONS: BTN[] = [
//     {key: 'CE', val: clearClick},
//     {key: 'C', val: clearClick},
//     {key: '<', val: actionClick},
//     {key: '/', val: actionClick},
//     {key: '7', val: numberClick},
//     {key: '8', val: numberClick},
//     {key: '9', val: numberClick},
//     {key: '*', val: actionClick},
//     {key: '4', val: numberClick},
//     {key: '5', val: numberClick},
//     {key: '6', val: numberClick},
//     {key: '-', val: actionClick},
//     {key: '1', val: numberClick},
//     {key: '2', val: numberClick},
//     {key: '3', val: numberClick},
//     {key: '+', val: actionClick},
//     {key: '00', val: numberClick},
//     {key: '0', val: numberClick},
//     {key: ',', val: actionClick},
//     {key: '=', val: actionClick}
//   ];
  // function clearClick(){
  //   console.log(this)
  // }
  // function numberClick(){
  //   console.log(typeof(this.key));
  //   console.log(parseInt(this.key));
  //   console.log(typeof(parseInt(this.key)));
  //   console.log(parseInt(this.key));
  //   var n = parseInt(this.key);
  //   return n;
  // }
  // function actionClick(){
  //   console.log(this.key);
  // }

@Component({
  selector: 'app-num-btns',
  templateUrl: './num-btns.component.html',
  styleUrls: ['./num-btns.component.scss']
})


export class NumBtnsComponent {
  // buttons = BUTTONS;
  n: number = 1234;
  // clearClick = clearClick;
  // numberClick = numberClick;
  // actionClick = actionClick;

  buttons: BTN[] = [
    {key: 'CE', val: this.clearClick},
    { key: 'C', val: this.clearClick },
    {key: '<', val: this.actionClick},
    {key: '/', val: this.actionClick},
    {key: '7', val: this.numberClick},
    {key: '8', val: this.numberClick},
    {key: '9', val: this.numberClick},
    {key: '*', val: this.actionClick},
    {key: '4', val: this.numberClick},
    {key: '5', val: this.numberClick},
    {key: '6', val: this.numberClick},
    {key: '-', val: this.actionClick},
    {key: '1', val: this.numberClick},
    {key: '2', val: this.numberClick},
    {key: '3', val: this.numberClick},
    {key: '+', val: this.actionClick},
    {key: '00', val: this.numberClick},
    {key: '0', val: this.numberClick},
    {key: ',', val: this.actionClick},
    {key: '=', val: this.actionClick}
  ];

  clearClick(){
    console.log(this)
  }
  numberClick(e){
    console.log((e.target.innerHTML));
  }
  actionClick(){
    console.log(this);
  }
}
