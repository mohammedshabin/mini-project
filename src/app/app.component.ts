import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'github-profile-finder';
  public name ='';
  public Address ='';

  public isonClickPressed = false;

    
  constructor() { }

  ngOnInit(): void {
  }
onClickbutton(){
  this.isonClickPressed = true;
  
}
}
