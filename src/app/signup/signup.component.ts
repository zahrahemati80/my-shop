import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';
interface SignupData {
  name:string;
  lastname:string;
  email:string;
  password:string;
  idnumber:number;
  liscense:boolean;
}

@Component({
  selector: 'app-signup',
  imports: [FormField],
  templateUrl:'./signup.component.html',
  styleUrl: './signup.component.css',

})
export class SignupComponent {
  private readonly router= inject(Router)
   signupModel=signal<SignupData>(
    {
      name:'',
      lastname:'',
      email:'',
      password:'',
      idnumber:0,
      liscense:false,
    })
    signupForm=form(this.signupModel);
  //
  onSubmit(event:Event)
  {event.preventDefault();
    const getData=this.signupModel();
    console.log("user data is:",getData);
  }

  back() {
    this.router.navigate(['/']);
  }
}

//
// interface LoginData {
//   email: string;
//   password: string;
//   emailNotifications: boolean;
//   smsNotifications: boolean;
// }
//
// @Component({
//   selector: 'app-form',
//   templateUrl: './formcomponent.html',
//   styleUrl: './formcomponent.css',
//   imports: [FormField],
// })
//
//
// export class Form {
//   protected readonly title = signal('project09_angular');
//   loginModel = signal<LoginData>({
//       email: '',
//       password: '',
//       emailNotifications: false,
//       smsNotifications: false
//     }
//   );
//
//   loginForm = form(this.loginModel);
//
//   onSubmit(event: Event) {
//     event.preventDefault();
//     // Perform login logic here
//     const credentials = this.loginModel();
//     console.log('Logging in with:', credentials);
//     // e.g., await this.authService.login(credentials);
//     this.loginForm.email().value.set('alice@wonderland.com');
//
//   }
//   // Update the value programmatically
//   check(event: Event) {
//     console.log(event);
//     console.log(this.loginForm.emailNotifications().value());
//     console.log(this.loginForm.smsNotifications().value())
//   }
// }
//
//
//
//
// // loginForm;//is a FieldTree
// // loginForm.email;//is also a Fieldtree
//
//
//
//




