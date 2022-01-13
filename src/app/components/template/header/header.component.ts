import { UserService } from './../../../core/user/user.service';
import { User } from './../../../core/user/user';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  userName: string;
  link_inicio = "";
  link_produtos = "products";

  constructor(
    private userService: UserService,
    private router: Router,
    private headerService: HeaderService
    )
  {
    this.userName = userService.getUserName();
  }

  logout()
  {
    this.userService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }
}
