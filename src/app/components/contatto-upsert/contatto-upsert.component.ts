import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddContattoDTO, AddContattoDTOConNumbers, Contatto } from 'src/app/models/contatto';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-contatto-upsert',
  templateUrl: './contatto-upsert.component.html',
  styleUrls: ['./contatto-upsert.component.css']
})
export class ContattoUpsertComponent implements OnInit {

  editMode = false;
  private editContattoId = 0;

  cForm = this.fb.group({
    tipo: ['f'],
    nome: [''],
    cognome: [''],
    rag_soc: [''],
    indirizzo: this.fb.group({
      via: [''],
      citta: [''],
      provincia: [''],
      cap: [''],
      nazione: ['']
    }),
    email: ['', [Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
    tel: ['', [Validators.pattern(/\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*/)]],
    dataCompleanno: ['', [Validators.pattern(/(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))/)]]
  });

  get nomeFormControl() {
    // return this.cForm.controls["nome"]!;
    return this.cForm.get("nome")!;
  }

  get cognomeFormControl() {
    return this.cForm.get("cognome")!;
  }

  get rag_socFormControl() {
    return this.cForm.get("rag_soc")!;
  }

  get isPersonaFisica(): boolean {
    return this.cForm.get("tipo")!.value == "f";
  }

  constructor(
    private fb: FormBuilder,
    private rs: RubricaService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id != "add") {
      this.editMode = true;
      this.editContattoId = Number(id);
      this.loadContatto();
    } else {
      this.cForm.patchValue({
        indirizzo: {
          nazione: "Italia"
        }
      })
    }
  }

  loadContatto() {
    this.rs.getContattoById(this.editContattoId).subscribe(contatto => {
      this.cForm.patchValue(contatto);
    });
  }

  onSubmit() {
    // let model = new AddContattoDTOConNumbers();

    // model.tipo = this.cForm.get("tipo")!.value!;
    // model.cognome = this.cForm.get("cognome")!.value ?? "";
    // model.nome = this.cForm.get("nome")!.value ?? "";
    // model.rag_soc = this.cForm.get("rag_soc")!.value!;
    // model.email = this.cForm.get("email")!.value!;
    // model.tel = Number(this.cForm.get("tel")!.value!);
    // model.indirizzo.via = this.cForm.get("indirizzo")!.get("via")!.value ?? "";
    // model.indirizzo.citta = this.cForm.get("indirizzo")!.get("citta")!.value ?? "";
    // model.indirizzo.cap = Number(this.cForm.get("indirizzo")!.get("cap")!.value ?? 0);
    // model.indirizzo.provincia = this.cForm.get("indirizzo")!.get("provincia")!.value ?? "";
    // model.indirizzo.nazione = this.cForm.get("indirizzo")!.get("nazione")!.value ?? "";

    // this.rs.addContatto(model).subscribe(r => {
    //   console.log(r);
    //   this.router.navigate(["/"]);
    // });

    if (this.editMode) {
      this.rs.editContattoById(this.editContattoId, this.cForm.value as AddContattoDTO)
        .subscribe(r => {
          console.log(r);
          this.router.navigate(["/"]);
        });
    } else {
      this.rs.addContatto(this.cForm.value as AddContattoDTO)
        .subscribe(r => {
          console.log(r);
          this.router.navigate(["/"]);
        });
    }
  }
}
