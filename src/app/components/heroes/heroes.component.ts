import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
