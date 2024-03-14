import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  infos = [
    {
      title: "A propos de nous",
      text: "Au petit village est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix.",
      img: "assets/pictures/asterix-obelix.jpg",
      alt: "Image d'Astérix et Obélix ainsi que certains personnages"
    }
  ]
  constructor() { }
}
