import { CustomError } from "../../error/CustomError";


export class UserValidations {
  static VerifyName = (name: string) => {
    if (name==="") {
        throw new CustomError(423,"O nome não pode ser vazio")                
    }
    
  };
}
