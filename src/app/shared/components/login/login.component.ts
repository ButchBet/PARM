import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  
  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),

        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ])
      }
    )
  }

  messageColor = "";

  errorMessage = "";

  userName:string = "";

  userPassword: string = "";

  loginValidation(event: Event) {

    event.preventDefault()

    const counter:any = this.usersService.dataCheck(this.userName, this.userPassword, 0);

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

  goTo() {
    this.router.navigate(["./regist"], {relativeTo: this.route});
  }

}
