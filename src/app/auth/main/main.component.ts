import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@Component({
selector: 'app-main',
templateUrl: './main.component.html',
styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@ViewChild('navBar') navBar: NavbarComponent;

constructor() {
}

ngOnInit(): void {
}


funEventEmitNavBar(event: number) {
//enseña lo que elegistes en el input
this.navBar.countProduct = Number(event);
console.log("La cantidad tiene", event);
}

}