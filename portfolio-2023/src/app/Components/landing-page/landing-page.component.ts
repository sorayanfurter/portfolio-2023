import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(){
    let link = document.createElement('a');
    link.download = "CV-SORAYA-FERULANO-PAEZ.pdf";
    link.href = "assets/CV-SORAYA-FERULANO-PAEZ-2023.pdf";
    link.click();


  }
}
