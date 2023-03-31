import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, filter, from, ignoreElements, interval, map, observeOn, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


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
  // myObs = from(this.cities);
  //myObs = of(this.cities, this.products, "Hello World", this.arr)

  // city: any[] = [];
  // prd: any[] = [];

  // myFilter = this.myObs.pipe(map((val) => {
  //   if (val == this.products) {
  //     this.city = val;
  //     return this.city;
  //   }
  //   else if (val == this.cities) {
  //     this.prd = val;
  //     return this.prd;
  //   }
  //   else {
  //     return null
  //   }
  // })
  // );

  //cities, null, Hello World, null
  // myFilter = this.myObs.pipe(map((val) => {
  //   if (val == this.products) {
  //     return val;
  //   }
  //   else if (val == this.cities) {
  //     return val;
  //   }
  //   else {
  //     return null
  //   }
  // }),
  //   filter(x => x != null)
  // );

  // myObs = from(this.arr);

  // myFilter = this.myObs.pipe(map((val) => {
  //   return val * 2;
  // }));

  // myFilteredData = this.myObs.pipe(filter((data) => {
  //   return data > 3
  // }));

  // myFilteredData = this.myObs.pipe(filter((data)=>{
  //   return data.endsWith("i");
  // }));

  //Interval Function of RxJS
  // myObs = interval(1000);

  myObs = interval(2000).pipe(
    startWith(0),
    switchMap(() => from(this.cities))
  );
  myInteravalObs: any;

  //Subscribe
  ngOnInit(): void {
    this.myInteravalObs = this.myObs.subscribe(
      (v) => console.log(v), //getting next value
      (err) => console.log(err.message), //getting error value
      () => console.log("Operation Completed") //getting completion status
    );
  }

  unsubscribe() {
    this.myInteravalObs.unsubscribe();
  }

  ngOnDestroy(): void {
    this.myInteravalObs.unsubscribe();
  }
}
