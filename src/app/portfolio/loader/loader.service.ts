import { Injectable,Renderer } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { LoaderState } from './loader.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {

    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public loaderTest: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
}