import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private apiService: ApiServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forms();
  }

  forms() {
      this.myForm = this.fb.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        app_user: new FormControl('', [Validators.required]),
      });
    
  }

  hide = true;

  userType = 'consumer';

  switchUser(user: string) {
    this.userType = user === 'admin' ? 'admin' : 'consumer';
  }

  logIn() {
    if (this.myForm.valid) {
      console.log(this.userType);

      switch (this.userType) {
        case 'admin':
          let admin:any = {};
          admin['username'] = this.myForm.value.username;
          admin['password'] = this.myForm.value.password;
          this.apiService.adminLogin(admin).subscribe(
            (res:any) => {
              this.router.navigate(['home']);
              localStorage.setItem('admin', 'true');
              console.log(res.headers.get('jwttoken'), 'erwrwfeafsfsdert');
              
              localStorage.setItem('jwttoken', res.headers.get('jwttoken') + '')
            },
            () => {
              localStorage.clear();
            }
          );
          break;
        case 'consumer':
          let consumer:any = {};
          consumer['username'] = this.myForm.value.username;
          this.apiService.consumerLogin(consumer).subscribe(
            () => {
              this.router.navigate(['home']);
              localStorage.setItem('admin', 'false');
            },
            () => {
              localStorage.clear();
            }
          );
          break;
      }
    }
  }
}
