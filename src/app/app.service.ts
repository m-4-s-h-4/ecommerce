import { Injectable } from '@angular/core';
import data from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getProducts() {
    console.log(data);
    return data;
  }
}
