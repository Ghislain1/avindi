import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }



  ngOnInit(): void {
  }

}
