import { InvalidRequest_BlankName, InvalidRequest_ShortName, InvalidRequest_BigName, InvalidRequest_InvalidName, InvalidRequest_WrongFormat, InvalidRequest_BlankEmail, InvalidRequest_BlankPassword, InvalidRequest_InvalidEmail, InvalidRequest_ShortPassword, InvalidRequest_WeakPassword } from "../../error/CustomError";

export class UserValidations {
    static VerifyName = (name: string) => {
      if (name === "") {
        throw new InvalidRequest_BlankName();
      }
  
      if (name.length < 3) {
        throw new InvalidRequest_ShortName();
      }
  
      if (name.length > 60) {
        throw new InvalidRequest_BigName();
      }
  
      if (!/^[A-Za-zÀ-ÿ\s]+$/.test(name)) {
        throw new InvalidRequest_InvalidName();
      }
  
      if (name.trim() !== name) {
        throw new InvalidRequest_WrongFormat();
      }
    };
  
    static VerifyPassword = (password: string) => {
      if (password === "") {
        throw new InvalidRequest_BlankPassword();
      }
  
      if (password.length < 8) {
        throw new InvalidRequest_ShortPassword();
      }
  
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
        throw new InvalidRequest_WeakPassword();
      }
    };
  
    static VerifyEmail = (email: string) => {
      if (email === "") {
        throw new InvalidRequest_BlankEmail();
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new InvalidRequest_InvalidEmail();
      }
    };

    static ExecUserValidations = (name: string, password: string, email: string) => {
        this.VerifyName(name);
        this.VerifyPassword(password);
        this.VerifyEmail(email); 
      };
  }