import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent  implements OnInit {

  constructor(private service:AuthService, private router:Router){ 
  
  }

  ngOnInit() {}

  async deslog(){
    await this.service.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
