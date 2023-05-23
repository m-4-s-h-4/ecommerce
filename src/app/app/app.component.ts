import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { }


  ngOnInit() {
    this.getProducts();

  }

  getProducts() {
    const data = this.appService.getProducts();
    console.log(data);
  }
}