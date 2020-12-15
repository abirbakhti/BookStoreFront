import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() toggleSideBarForMe :EventEmitter<any>= new EventEmitter();
  
  count=0;
  constructor() { }
  
 
  ngOnInit(): void {
  }

  sideBarToggler(){
    this.toggleSideBarForMe.emit();
  }

  logout(){
    console.log("logout!!")
  }

}
