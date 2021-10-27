import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.icon = "bars";

    this.imgUrl = "personFront.jpg";

    this.imgAlt = "Person profile";

    this.personName = "Camila yulitza";

    this.display = "hidden";

    this.width = "minContainerWidht";
  }

  changeIcon() {
    if(this.icon === "bars")  {
      setTimeout(() => {
        this.display = "";
      },225);

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

}
