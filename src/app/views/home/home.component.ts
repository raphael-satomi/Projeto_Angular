import { UserService } from './../../core/user/user.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string;

  constructor(
    private headerService: HeaderService,
    private userService: UserService
  ) {
    this.userName = userService.getUserName();
  }

  ngOnInit(): void {
  }

}
