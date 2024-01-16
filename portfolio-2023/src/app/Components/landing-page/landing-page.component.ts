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
    link.download = "CV-SORAYA-FERULANO-PAEZ-ENG-2024.pdf";
    link.href = "/assets/CV-SORAYA-FERULANO-PAEZ-ENG-2024.pdf"
    link.click();


  }
}
