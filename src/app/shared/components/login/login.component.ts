import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/usersService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  messageColor = "";

  errorMessage = "";

  userName:string | undefined;

  userPassword: string | undefined;

  loginValidation(event: Event) {

    event.preventDefault()

    const counter = this.usersService.dataCheck(this.userName, this.userPassword, 0);

    if(counter) {
      this.errorMessage = "Datos correctos";

      this.messageColor = "Success"
      
      setTimeout(() => {
        alert("Login");
          // location.assign("//www.platzi.com");
      }, 2000);
  } else {
    this.errorMessage = "Datos incorrectos";

    this.messageColor = "Error"

    setTimeout(() => {
      this.errorMessage = "";

      this.messageColor = ""
    }, 1000)
   }
  }

}
