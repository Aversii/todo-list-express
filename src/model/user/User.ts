import { randomUUID } from "crypto";

export class User {
   private readonly id: string;
   private name: string;
   private password: string;
   private email: string;

    constructor(name:string,password:string,email:string){
        this.id = randomUUID()
        this.name = name
        this.password = password
        this.email = email 
  }

  public GetId (){
    return this.id;
  }

  public GetName(){
    return this.name;
  }

  public SetName(newName:string){
    return this.name = newName;
  }

  public GetPassword(){
    return this.password;
  }

  public SetPassword(newPassword:string){
    return this.password = newPassword;
  }

  public GetEmail(){
    return this.email;
  }

  public SetEmail(newEmail:string){
    return this.email = newEmail;
  }
}