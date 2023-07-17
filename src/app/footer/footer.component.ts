import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html' ,
    styleUrls: ['./footer.component.css']
})

export class FooterComponent{
    title = "Listado";
    contenido = "Generado por:";
    autor: any = {nombre:'Carla', apellido:'Leon'}
}