import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  message: boolean = false;
  constructor(private builder: FormBuilder, private contact: ContactService) {}
  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }



  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe({
      next: (resp) => {
        console.log(resp);
        location.href = 'https://soraya-ferulano-paez.netlify.app/#contact';
        this.FormData.reset();
        this.message = true;

      },
      error: (err) => {
        console.warn(err.responseText);
        console.log(err);
      },
    });
  }
}
