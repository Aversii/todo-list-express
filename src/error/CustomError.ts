export class CustomError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidRequest_BlankName extends CustomError { 
  constructor() {
    super(422, "O nome não pode estar em branco.");
  }
}

export class InvalidRequest_ShortName extends CustomError { 
  constructor() {
    super(422, "O nome deve ter pelo menos 3 caracteres.");
  }
}

export class InvalidRequest_BigName extends CustomError { 
  constructor() {
    super(422, "O nome é muito grande e excede o limite de 60 caracteres.");
  }
}

export class InvalidRequest_InvalidName extends CustomError { 
  constructor() {
    super(422, "O nome só pode conter letras e espaços.");
  }
}

export class InvalidRequest_WrongFormat extends CustomError { 
  constructor() {
    super(422, "O nome não pode começar ou terminar com espaços.");
  }
}

export class InvalidRequest_BlankPassword extends CustomError {
  constructor(message: string = "A senha não pode estar em branco.") {
    super(422, message);
  }
}

export class InvalidRequest_ShortPassword extends CustomError {
  constructor(message: string = "A senha deve ter no mínimo 8 caracteres.") {
    super(422, message);
  }
}

export class InvalidRequest_WeakPassword extends CustomError {
  constructor(message: string = "Senha fraca. Use letras, números e caracteres especiais.") {
    super(422, message);
  }
}

export class InvalidRequest_BlankEmail extends CustomError {
  constructor(message: string = "O e-mail não pode estar em branco.") {
    super(422, message);
  }
}

export class InvalidRequest_InvalidEmail extends CustomError {
  constructor(message: string = "E-mail inválido. Use o formato 'exemplo@dominio.com'.") {
    super(422, message);
  }
}

export class UserAlreadyExists extends CustomError {
  constructor() {
    super(422, "Já existe um usuário cadastrado com este e-mail.");
  }
}

export class InvalidRequest_WrongPassword extends CustomError {
  constructor() {
    super(401, "Senha incorreta.");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado.");
  }
}

export class InvalidUserUpdate extends CustomError {
  constructor() {
    super(400, "Os dados fornecidos para atualização do usuário são inválidos.");
  }
}

export class UserDeletionFailed extends CustomError {
  constructor() {
    super(400, "Falha ao excluir usuário. O usuário pode não existir.");
  }
}

export class UserEmailBlank extends CustomError {
  constructor() {
    super(422, "O e-mail não pode estar em branco.");
  }
}

export class UserPasswordBlank extends CustomError {
  constructor() {
    super(422, "A senha não pode estar em branco.");
  }
}

export class UserPasswordWeak extends CustomError {
  constructor() {
    super(422, "A senha é muito fraca. Use letras, números e caracteres especiais.");
  }
}

export class UserEmailInvalid extends CustomError {
  constructor() {
    super(422, "O e-mail é inválido. Use o formato 'exemplo@dominio.com'.");
  }
}
