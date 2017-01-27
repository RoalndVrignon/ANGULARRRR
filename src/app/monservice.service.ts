import { Injectable } from '@angular/core';

const KEY:string = 'Service';

@Injectable()
export class Service {

  constructor(
    public id: number,
    public name: string,
    public summary: String, 
    public genre: number,
    public screenshots: string,
    public videos: string,
    public cover: string,

  ) { }

}

export class ProductService {
  getServices(): Array<Service> {
    return Services.map(p => new Service(p.id,p.name,p.summary,p.genre,p.screenshots,p.videos,p.cover));
  }
}

var Services =[

]
