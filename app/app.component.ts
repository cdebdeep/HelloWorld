///</// <reference path="./node_modules/angular2/core.d.ts" />



import {Component} from 'angular2/core';
import {Hero} from './hero'

@Component({
    selector: 'my-app',
    template: `
    <h4>Hello from Angular2</h4>
    <h5>{{title}}</h5>
    <h6>My hero is {{myHero.name}}</h6>
    <p>Add new hero</p>
    <input #newHero
     (keyup.enter)="addHero(newHero.value)"
     (blur) ="addHero(newHero.value);newHero.value='' "
     >
     <button (click)=addHero(newHero.value)>Add</button>     
    <p> Heros: </p>
    <ul>
    <li *ngFor="#hero of heros">
       {{hero.name}}
    </li>
    </ul>
        ` 
})

export class AppComponent {
    title = "Hero"
    heros = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ]    
    myHero = this.heros[0];
    addHero(newHero:string){
        this.heros.push(new Hero(Math.random(),newHero));
    }
    
}