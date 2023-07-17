import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  treinos: any = [
    {img: 'https://media.istockphoto.com/id/613687062/pt/foto/woman-in-gym-working-out-black-and-white-photo.jpg?s=612x612&w=0&k=20&c=xrDM8hrW66WwFGk6CfB_X1xujXIdcG050JYUZBOBPJE=', title:'Yoga express'},
    {img: 'https://cdnstatic8.com/academiaviacampus.com.br//wp-content/uploads/2017/11/treino-pesado-e-longo-e-resultados.jpg', title:'Biceps'},
    {img: 'https://ultramacho.com.br/wp-content/uploads/2020/07/academia-2.jpg', title:'Peso livre'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
