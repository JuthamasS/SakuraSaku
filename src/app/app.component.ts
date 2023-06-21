import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularWeb';
  isShow = 'false';
  fruit = ['apple','banana','mango'];
  price = 250;
  nowDate = new Date();
  num1: number = 100;
  num2: number = 200;
  url = 'https://www.google.co.th/?hl=th';

  showMessage(){
    return this.title;
  }

  i:number = 0;
  public addCount(){
    this.i++;
  }

  readData(value:string){
    console.log(value);
  }

  addNumber(){
    return this.num1 + this.num2;
  }

  onShowData(){
    console.log('show data complete');
  }

  onKeyPressEnter($event: Event){
    
      console.log('Press enter : ', $event.target);
    
  }
}
