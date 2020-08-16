import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  //  if (arg === '' || arg.length < 2) return value; esto es para que no busque sin una cantidad minima de letras
    const resultPosts = [];
    for (const post of value) {
      if (post.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
