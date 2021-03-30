import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Number): string {
  	let ipValue = value;
  	switch (ipValue) {
  		case 1:
  			return 'Nam'
  			break;
  		case 2:
  			return 'Nữ'
  			break;
  		default:
  			return 'Khác'
  	}
  }

}
