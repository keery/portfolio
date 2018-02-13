import { Injectable,Renderer } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { LoaderState } from './loader.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {

    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loaderTest: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    // displayLoader(value: boolean) { 
    //   // setTimeout(()=>{
    //   //   console.log("jdjd");
    //       this.loaderStatus.next(value);
    //   // }, 6000);
    // }

    show() 
    {
      this.loaderStatus.next(true);
    }
    hide() 
    {
      setTimeout(()=>{
        this.loaderTest.next(true);
      }, 4000);
      setTimeout(()=>{
        this.loaderStatus.next(false);
      }, 4800);

    }


    displayTest(value: boolean) {
      // setTimeout(()=>{
      //   console.log("jdjd");
      //     this.loaderStatus.next(value);
      // }, 6000);
    }
    // public loader: LoaderComponent;
    // // public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    //  // public instances: {[key: string]: LoaderComponent} = {};
    //  constructor(){
    //    this.loader = new LoaderComponent(new Renderer());
    //  }

    // displayLoader(value: boolean) {
    //     this.loaderStatus.next(value);
    // }

  // public loaderSubject = new Subject<LoaderState>();
  // // loaderState = this.loaderSubject.asObservable();

  // constructor() {}

  // show() 
  // {
  //   this.loaderSubject.next(<LoaderState>{show: true});
  // }
  // hide() 
  // {
  //   this.loaderSubject.next(<LoaderState>{show: false});
  // }

}


// @Injectable()
// export class LoaderService {
//     public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//     displayLoader(value: boolean) {
//         this.loaderStatus.next(value);
//     }
// }