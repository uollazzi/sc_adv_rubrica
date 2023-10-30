import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from 'src/app/models/contatto';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-contatti-list',
  templateUrl: './contatti-list.component.html',
  styleUrls: ['./contatti-list.component.css']
})
export class ContattiListComponent implements OnInit {
  // contatti: Contatto[] = [];
  contatti$?: Observable<Contatto[]>;

  constructor(private rs: RubricaService) {


  }

  ngOnInit(): void {
    this.loadContatti();
  }

  loadContatti() {
    // this.rs.getContatti().subscribe(contatti => {
    //   this.contatti = contatti;
    //   console.log(contatti);
    // })
    this.contatti$ = this.rs.getContatti();
  }

  elimina(id: number) {
    if (confirm("Sei sicuro sicurissimo?")) {
      this.rs.deleteContattoById(id).subscribe(() => {
        this.loadContatti();
      })
    }
  }
}
