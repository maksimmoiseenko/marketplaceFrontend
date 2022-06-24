import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCatalogPage(typeId: number): void {
    this.router.navigate(['/type/' + typeId]);
  }

}
