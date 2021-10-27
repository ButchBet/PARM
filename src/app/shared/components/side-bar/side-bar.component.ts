import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  // Manupulate the asitde status 
  icon:string | undefined;  // bars, x

  // Save url, alt image  and name of user
  imgUrl: string | undefined;

  imgAlt: string | undefined;

  personName: string | undefined;

  // show or hidde the section, mane and footer
  display: string | undefined;

  // change width of aside
  width: string | undefined;

  // To move the formCheckBox
  move: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.icon = "bars";

    this.imgUrl = "personFront.jpg";

    this.imgAlt = "Person profile";

    this.personName = "Camila yulitza";

    // this.display = "hidden";

    // this.width = "minContainerWidht";
    
    this.display = "";

    this.width = "maxContainerWidht";

    this.icon = "x";

    this.move = "moveLeft1";
  }

  changeIcon() {
    if(this.icon === "bars")  {
      setTimeout(() => {
        this.display = "";
      },205);

      this.width = "maxContainerWidht";

      this.icon = "x";

      this.move = "moveLeft1";
    } else {
      this.display = "hidden";

      this.width = "minContainerWidht";

      this.icon = "bars";

      this.move = "";
    }
  }

  goTo(id:any) {
    let newId = +id;

    switch(newId) {
      case 1:
        this.router.navigate(["./schedule-appointment"], {relativeTo: this.route});
      break;

      case 2:
        this.router.navigate(["./schedule-petiotion"], {relativeTo: this.route});
      break;

      case 3:
        this.router.navigate(["./calendar"], {relativeTo: this.route});
      break;

      case 4:
        this.router.navigate(["./appointments"], {relativeTo: this.route});
      break;
    }
  }

}
