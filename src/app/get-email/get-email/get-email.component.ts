import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-email',
  templateUrl: './get-email.component.html',
  styleUrls: ['./get-email.component.css']
})
export class GetEmailComponent implements OnInit {
  email!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['jumptoemail',this.email]);
  }

}
