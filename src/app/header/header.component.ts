import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name ='';
  public Address ='';
  public isonClickPressed = false;
/*   public users =[{
    
    firstname: 'shabin',
    lastname : 'Mohammed'

  },
  {
    
    firstname: 'hello',
    lastname : 'world'

  },

] */
   
    
  constructor() { }

  ngOnInit(): void {
  }
onClickbutton(){
  this.isonClickPressed = true;
  
}
}
