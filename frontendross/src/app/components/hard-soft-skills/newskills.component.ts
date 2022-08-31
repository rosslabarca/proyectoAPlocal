import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskills',
  templateUrl: './newskills.component.html',
  styleUrls: ['./newskills.component.css']
})
export class NewskillsComponent implements OnInit {
  nombreSkills: string;
  porcentaje: number;

  constructor(private skillsS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const skills = new Skills(this.nombreSkills, this.porcentaje);
    this.skillsS.save(skills).subscribe(
      data =>{
        alert("Skill agregada");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
