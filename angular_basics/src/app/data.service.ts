import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPersons(){
    return this.persons;
  }
  
  persons:Person[] = [
    { id: 1, name: "Harsh", age: 28 },
    { id: 2, name: "Harry", age: 20 },
    { id: 3, name: "Sam", age: 30 },
    { id: 4, name: "Roger", age: 35 },
    { id: 5, name: "George", age: 29 },
  ]

}
