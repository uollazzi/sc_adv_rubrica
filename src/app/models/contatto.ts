export interface Contatto {
  id: number;
  tipo: string;
  nome: string;
  cognome: string;
  rag_soc: string;
  indirizzo: Indirizzo;
  email: string;
  tel: string;
  dataCompleanno: string;
}

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  nazione: string;
}

export class AddContattoDTO {
  tipo: string = "";
  nome: string = "";
  cognome: string = "";
  rag_soc: string = "";
  indirizzo: Indirizzo = { via: "", citta: "", cap: "", provincia: "", nazione: "" };
  email: string = "";
  tel: string = "";
  dataCompleanno: string = "";
}

export class AddContattoDTOConNumbers {
  tipo: string = "";
  nome: string = "";
  cognome: string = "";
  rag_soc: string = "";
  indirizzo: IndirizzoConNumbers = { via: "", citta: "", cap: 0, provincia: "", nazione: "" };
  email: string = "";
  tel: number = 0;
  dataCompleanno: string = "";
}



export interface IndirizzoConNumbers {
  via: string;
  citta: string;
  provincia: string;
  cap: number;
  nazione: string;
}
