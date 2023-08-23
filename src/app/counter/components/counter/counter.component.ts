import { Component } from "@angular/core";


@Component(
  {
    selector: `app-counter`,
    templateUrl: `./counter.component.html`
  }
)

export class CounterComponent{

   // Properties

   public title: string = 'Mi primer componente COUNT';
   public counter: number = 10;

   // Methods

   public increaseBy(): void {
     this.counter++;
   }

   public decreaseBy(): void{
     this.counter--;
   }

   public resetCounter(): void{
     this.counter = 10;
   }


}

