import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : ControllerService) { }

  ngOnInit(): void {
  }

  press(){
      (this.service.ev1.target as HTMLButtonElement).style.backgroundColor="transparent";
      (this.service.ev1.target as HTMLButtonElement).style.color="white";
      (this.service.ev1.target as HTMLButtonElement).style.backgroundSize="cover";
      (this.service.ev1.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (this.service.ev1.target as HTMLButtonElement).style.padding="5px";

      (this.service.ev2.target as HTMLButtonElement).style.backgroundColor="black";
      (this.service.ev2.target as HTMLButtonElement).style.color="white";
      (this.service.ev2.target as HTMLButtonElement).style.backgroundSize="cover";
      (this.service.ev2.target as HTMLButtonElement).style.borderRadius="0px 30px 30px 0px";
      (this.service.ev2.target as HTMLButtonElement).style.padding="5px";
  }
}
