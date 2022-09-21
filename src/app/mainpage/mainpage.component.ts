import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private observer : BreakpointObserver,private router:Router,private service : ControllerService) { }

  
  ngOnInit(): void {
    (document.getElementById('dashboard') as HTMLElement).click();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });


  }
  event1:any;
  event2:any;
  selectButton1(ev:any){
    this.event1=ev;
    this.service.ev1=ev;
    if(this.event1){
      
      (ev.target as HTMLButtonElement).style.backgroundColor="black";
      
      (ev.target as HTMLButtonElement).style.backgroundSize="cover";
      (ev.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (ev.target as HTMLButtonElement).style.padding="5px";

      (this.event2.target as HTMLButtonElement).style.backgroundColor="transparent";
      (this.event2.target as HTMLButtonElement).style.color="white";
      (this.event2.target as HTMLButtonElement).style.backgroundSize="cover";
      (this.event2.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (this.event2.target as HTMLButtonElement).style.padding="5px"
    }
    
  }
  selectButton2(ev:any){
    this.event2=ev;
    this.service.ev2=ev;
    if(this.event2){
      
      (ev.target as HTMLButtonElement).style.backgroundColor="black";
      
      (ev.target as HTMLButtonElement).style.backgroundSize="cover";
      (ev.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (ev.target as HTMLButtonElement).style.padding="5px";

      (this.event1.target as HTMLButtonElement).style.backgroundColor="transparent";
      (this.event1.target as HTMLButtonElement).style.color="white";
      (this.event1.target as HTMLButtonElement).style.backgroundSize="cover";
      (this.event1.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (this.event1.target as HTMLButtonElement).style.padding="5px";

    
    }
    
  }
}
