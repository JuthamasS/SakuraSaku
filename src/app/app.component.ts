import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [
//     FormsModule,
//   ]
// })

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
  ParentCount = 0;
  fullname:string = 'Juthamas Saikaew';
  languages = ['Visual C#','Vissual Basic','MEAN Stack','Angular'];
  // customer:Customer;
  // str:string;


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
  addParentCount(){
    this.ParentCount = this.ParentCount + 1;
  }
  clearCount(value:number){
    this.ParentCount = value;
  }
  onSubmit(){
    // this.str = "ค่าจากแบบฟอร์ม : " + JSON.stringify(this.customer);
    // window.alert(this.str);
  }
}
class Customer{
  // FullName:string;
  // Email:string;
}