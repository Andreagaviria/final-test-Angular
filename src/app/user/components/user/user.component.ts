import { Component, OnInit } from '@angular/core';

//servicio
import {personManageService} from './user/services/person-manage.service';

//

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  gender: string;
  profession: string;
  knowfor: string;

  constructor(private personManageService: PersonManageService) { }

  ngOnInit(): void {
  }

}
