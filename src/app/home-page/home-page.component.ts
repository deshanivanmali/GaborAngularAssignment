import { Component ,OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,public router: Router){
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
  
    if(this.form.value.username ==="admin" && this.form.value.password==="admin123")
    {
      this.router.navigate(["/user"]);
    
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
