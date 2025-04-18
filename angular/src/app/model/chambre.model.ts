export enum TypeChambre {
    SIMPLE = 'SIMPLE',
    DOUBLE = 'DOUBLE',
    TRIPLE = 'TRIPLE'
  }
  
  export interface Chambre {
    idChambre?: number;
    numeroChambre: number;
    typeC: TypeChambre;
    idBloc: number;
  }