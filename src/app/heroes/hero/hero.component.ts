import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  // properties

  private name: string = 'ironman';
  private age: number = 45;

  // geters and seters

  get Name(): string{
    return this.name;
  }

  set Name(value: string){
    this.name = value;
  }

  get Age(): number{
    return this.age;
  }

  set Age(value: number){
    this.age = value;
  }

  // methods

  public UpperName(): string{
    return this.name.toUpperCase();
  }

  public changeName(): void{
    this.Name = 'thor';
  }

  public changeAge(): void{
    this.Age = 28;
  }

  public getHeroDescription(): string{
    return `${this.Name} - ${this.Age}`;
  }

  public resetForm():void{
    this.Name = 'ironman';
    this.Age = 45;
  }
}
