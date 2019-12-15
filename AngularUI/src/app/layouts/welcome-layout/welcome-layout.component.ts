import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-layout',
  templateUrl: './welcome-layout.component.html',
  styleUrls: ['./welcome-layout.component.scss']
})
export class WelcomeLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
