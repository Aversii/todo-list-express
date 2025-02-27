export class CustomError extends Error {
    constructor(public statusCode:number, message:string) {
      super(message);
    };;
};;

export class InvalidRequest_BlankName extends CustomError{ 
    constructor(){
        super(422,"Name can't be blank or empty.");
    };;
};;

export class InvalidRequest_ShortName extends CustomError{ 
    constructor(){
        super(422,"Name must be at least 3 characters long.");
    };;
}

export class InvalidRequest_BigName extends CustomError{ 
    constructor(){
        super(422,"O nome é muito grande e excede o limite de 60 caracteres");
    };;
}

export class InvalidRequest_InvalidName extends CustomError{ 
    constructor(){
        super(422,"O nome só pode conter letras e espaços");
    };;
}

export class InvalidRequest_WrongFormat extends CustomError{ 
    constructor(){
        super(422,"O nome não pode começar ou terminar com espaços");
    };;
}

export class InvalidRequest_BlankPassword extends CustomError {
    constructor(message: string = "Senha não pode estar em branco.") {
      super(422, message);
    }
  }
  
  export class InvalidRequest_ShortPassword extends CustomError {
    constructor(message: string = "Senha deve ter no mínimo 8 caracteres.") {
      super(422, message);
    }
  }
  
  export class InvalidRequest_WeakPassword extends CustomError {
    constructor(message: string = "Senha fraca. Use letras, números e caracteres especiais.") {
      super(422, message);
    }
  }
  
  export class InvalidRequest_BlankEmail extends CustomError {
    constructor(message: string = "Email não pode estar em branco.") {
      super(422, message);
    }
  }
  
  export class InvalidRequest_InvalidEmail extends CustomError {
    constructor(message: string = "Email inválido. Use o formato 'exemplo@dominio.com'.") {
      super(422, message);
    }
  }