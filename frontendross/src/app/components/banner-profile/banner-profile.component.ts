import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-banner-profile',
  templateUrl: './banner-profile.component.html',
  styleUrls: ['./banner-profile.component.css']
})
export class BannerProfileComponent implements OnInit {
  persona: Persona[] = [];
  
  constructor(private personaS: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaS.lista().subscribe(
      data =>{
        this.persona = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.personaS.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("no se pudo eliminar");
        }
      )
    }
  }

}
    


