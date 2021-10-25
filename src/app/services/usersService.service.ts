import { Users } from './users'

export class UsersService {
    constructor() {}

    usersList: Users[] = [new Users('ButchBet', 'k.salazar@utp.edu.co', 'helloWorld'),
                          new Users('camiloRex', 'ariasSoto.10@gmail.com', '12345Hello')];

    
    // Method to check the input data 
    dataCheck(name= "", pass = "", condition= 0, email = "", rep = ""): any {
        let cont = 0;

        if(condition === 0) {
        // Login form
        this.usersList.forEach(element => {
            if(element.name == name && element.password == pass) {
                return true;
            } else if(element.email == email && element.password == pass) {
                return true;
            } else {
                return false;
            }
        });
        } else {
        // Regist form
        if(this.usersList[0].email === email && this.usersList[0].name === name) {
            cont += 3;
        } else if(this.usersList[1].email === email && this.usersList[1].name === name) {
            cont += 3;
        } else if(this.usersList[0].email === email || this.usersList[1].email === email) {
            cont += 2;
        } else if(this.usersList[0].name === name || this.usersList[1].name === name) {
            cont += 1;
        }

        if(pass != rep) {
            cont += 4;
        }

        return cont;
        }
    }

    // Method to reate the new acount
    NewUser(user: Users) {
        this.usersList.unshift( user );
    }
}