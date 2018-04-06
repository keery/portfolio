import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ObjLoop',  pure: true })
export class ObjLoop implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }
}