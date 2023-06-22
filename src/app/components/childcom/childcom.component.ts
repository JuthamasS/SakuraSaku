import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit{
  @Input("ChildCount") count = 0;
  @Output() onClearCount = new EventEmitter<number>();

  constructor(){}
  ngOnInit(){}

  clearCount(){
    this.onClearCount.emit(0);
  }
}
