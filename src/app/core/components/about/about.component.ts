import { Component, OnInit } from '@angular/core';
import { TontinardService } from 'src/app/shared/services/tontinard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private tontinardService: TontinardService) { }
  items: any;
  ngOnInit(): void {

    this.tontinardService.getBlogs().subscribe(i => this.items = i);
  }

}
