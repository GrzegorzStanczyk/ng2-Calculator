import { Component } from '@angular/core';
import { NumBtnsComponent } from './num-btns/num-btns.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  result: string = 'data';
  cache: number = 0;

  onGetValue(data: string) {
    this.result = data;
  }
  onGetResult(data: number) {
    this.cache = data;
  }
}
