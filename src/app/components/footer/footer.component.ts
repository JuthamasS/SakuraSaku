import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // title = 'Style Binding';
  isError = false;

  getColorStyle(){
    return "white";
  }

  getBGColorStyle(){
    return "red";
  }
}
