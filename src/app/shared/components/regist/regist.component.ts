import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/services/users';
import { UsersService } from 'src/app/services/usersService.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  messageColor = "";

  errorMessage = "";

  userName: string = "";

  email: string = "";

  userPassword: string = "";

  userRepPassword: string = "";

  user: Users = new Users("", "", "");

  //Regist event answer
  RegistValidation(event: Event): void {
    event.preventDefault();

    const counter = this.usersService.dataCheck(this.userName, this.userPassword, 1, this.email, this.userRepPassword);

    if(counter === 0) {
      this.errorMessage = "Datos validos";

      this.messageColor = "Success";

      // Create and add the new user regist
      this.user = new Users(this.userName, this.email, this.userPassword);

      this.usersService.NewUser( this.user );

      setTimeout(() => {
        alert("Regist");
        // location.assign("//www.facebook.com");
    }, 2000);

    return;
    } else if(counter === 1) {
      this.errorMessage = "El nombre de usuario ya existe";
    } else if(counter === 2) {
      this.errorMessage = "El correo ya existe";
    } else if(counter === 3) {
      this.errorMessage = "El correo y nombre de usuario ya existen";
    } else if(counter === 4) {
      this.errorMessage = "La contraseña no coincide";
    } else if(counter === 5) {
      this.errorMessage = "La contraseña no coincide y el nombre de usuario ya existe";
    } else if(counter === 6) {
      this.errorMessage = "La contraseña no coincide y el correo ya existe";
    } else if(counter === 7) {
      this.errorMessage = "La contraseña no coincide, el correo y nombre de usuario ya existen";
    } 

    this.messageColor = "Error";

    setTimeout(() => {
      this.errorMessage = "";
    }, 3000);
  }


}
