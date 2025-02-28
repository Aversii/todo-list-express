import { randomUUID } from "crypto";
import { UserValidations } from "../validations/UserValidations";
import HashManagerService from "../../service/hashManager/HashManagerService";

export class User {
  private readonly id: string;
  private name: string;
  private password: string;
  private email: string; 

  private constructor(name: string, password: string, email: string) {
    this.id = randomUUID();
    this.name = name;
    this.password = password;
    this.email = email;
    
    UserValidations.ExecUserValidations(this.name, this.password, this.email);
    
  }

  public static async create(name: string, password: string, email: string): Promise<User> {
    UserValidations.ExecUserValidations(name, password, email);
    const hashedPassword = await HashManagerService.generateHash(password);
    return new User(name, hashedPassword, email);
  }


  public GetId() {
    return this.id;
  }

  public GetName() {
    return this.name;
  }

  public SetName(newName: string) {
    return (this.name = newName);
  }

  public GetPassword() {
    return this.password;
  }

  public async SetPassword(newPassword: string) {
    this.password = await HashManagerService.generateHash(newPassword)

  }

  public GetEmail() {
    return this.email;
  }

  public SetEmail(newEmail: string) {
    return (this.email = newEmail);
  }
}
