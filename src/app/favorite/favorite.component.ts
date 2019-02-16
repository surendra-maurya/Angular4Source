import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
@Input('is-favorite') isSelected:boolean;
@Output('change') click=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected=!this.isSelected;

    this.click.emit({newValue:this.isSelected});
  }
}
