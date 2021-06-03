import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent  {
  // @input é tipo importando a variavel do pai e reinderizando no filho
  @Input()
  title: string = ""

  @Input('myName')
  name:string = ""

}
