import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
   private apiService : ApiService,
   )
{
  }

  ngOnInit(): void {
  }

}
