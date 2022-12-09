import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokedex'
})
export class FiltroPokedexPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length <= 0) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
        //console.log('hola '+JSON.stringify(post))
      };
    };
    return resultPosts;
  }

}
