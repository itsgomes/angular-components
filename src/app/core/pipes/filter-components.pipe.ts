import { Pipe, PipeTransform } from '@angular/core';
import { Components } from '../models/components.model';

@Pipe({ 
  name: 'filterComponents', 
  standalone: true
})
export class FilterComponentsPipe implements PipeTransform {
  public transform(components: Components[] | null, query: string): any[] {
    if (!components)
      return [];

    if (!query) 
      return components;

    return components?.filter((components) => 
      components.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      components.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }
}