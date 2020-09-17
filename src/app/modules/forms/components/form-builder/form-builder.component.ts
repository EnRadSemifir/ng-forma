import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      lastname: [''],
      firstname: [''],
      adress: this.fb.group({
        num: [''],
        street: [''],
        city: ['']
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.createUser(this.userForm);
  }

}
