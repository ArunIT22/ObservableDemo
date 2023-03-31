import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ObservableDemo';

  //Basic Demo
  // myObs = new Observable((observer) => {
  //   observer.next(1)
  //   observer.next(2)
  //   observer.next(3)
  //   observer.next(4)
  //   observer.next(5)
  // });

  // myObs = new Observable((observer) => {
  //   setTimeout(() => { observer.next(1) }, 1000)
  //   setTimeout(() => { observer.next(2) }, 2000)
  //   setTimeout(() => { observer.next(3) }, 3000)
  //   setTimeout(() => { observer.next("Receiving Data from Server") }, 4000)
  //   //setTimeout(() => { observer.error(new Error("Unable to contact server")) }, 4500)
  //   setTimeout(() => { observer.next("Hello World") }, 5000)
  //   //setTimeout(() => { observer.complete() }, 6000)
  // });

  cities = ["Chennai", "Mumbai", "Jaipur", "Delhi", "Bengaluru"];
  products = ["Mobile Phone", "Accessories", "Clothing", "Appliances"];
  arr = [1, 2, 3, 4, 5, 6];
   myObs = from(this.cities);
  //myObs = of(this.cities, this.products, "Hello World", this.arr);

  // myObs = from(this.arr);

  // myFilteredData = this.myObs.pipe(filter((data) => {
  //   return data > 3
  // }));

  myFilteredData = this.myObs.pipe(filter((data)=>{
    return data.endsWith("i");
  }));

  //Subscribe
  ngOnInit(): void {
    this.myFilteredData.subscribe(
      (v) => console.log(v), //getting next value
      (err) => console.log(err.message), //getting error value
      () => console.log("Operation Completed") //getting completion status
    );
  }
}
