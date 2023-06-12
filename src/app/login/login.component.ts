import { Component ,OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,public router: Router,private service:UserService){
    this.form = this.formBuilder.group(
      {
       
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(6)
          ]
        ],
       
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(8)
          ]
        ],
      }
       
    );
  }
 
  ngOnInit(){
    localStorage.removeItem('userDetails')
    this.onReset();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    let user:any=this.service.login(this.form.value);
    
    if(user.length>0){
      localStorage.setItem('userDetails',JSON.stringify(user))
      this.router.navigate(["/home"]);
    
    this.onReset();
    }else{
      alert("Invalid username or password")
    }
   

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  
}
