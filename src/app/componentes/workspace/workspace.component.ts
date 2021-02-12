import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  route: string;

  constructor(location: Location, private router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();
    });
   }

  ngOnInit(): void {
  }

}
