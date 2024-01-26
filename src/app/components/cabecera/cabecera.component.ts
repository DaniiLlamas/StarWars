import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent  implements OnInit {
  usuario?:string
  constructor(private service:AuthService, private router:Router, private auth:Auth){ 
  
  }

  ngOnInit() {
    this.usuario = this.auth.currentUser?.email?.toString()
  }

  async deslog(){
    await this.service.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
