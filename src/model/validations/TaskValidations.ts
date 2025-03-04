import { InvalidRequest_BlankTitle, InvalidRequest_ShortTitle, InvalidRequest_BigTitle, InvalidRequest_InvalidTitle, InvalidRequest_BlankDescription, InvalidRequest_InvalidStatus, InvalidRequest_BigDescription } from "../../error/CustomError";

export class TaskValidations {
  static VerifyTitle = (title: string) => {
    if (title === "") {
      throw new InvalidRequest_BlankTitle();
    }

    if (title.length < 3) {
      throw new InvalidRequest_ShortTitle();
    }

    if (title.length > 100) {
      throw new InvalidRequest_BigTitle();
    }

    if (!/^[A-Za-zÀ-ÿ0-9\s]+$/.test(title)) {
      throw new InvalidRequest_InvalidTitle();
    }
  };

  static VerifyDescription = (description: string) => {
    if (description === "") {
      throw new InvalidRequest_BlankDescription();
    }
     if (description.length > 500) {
      throw new InvalidRequest_BigDescription();
    } 
  };

  static VerifyStatus = (status: string) => {
    const validStatuses = ["pending", "in_progress", "completed"];
    if (!validStatuses.includes(status)) {
      throw new InvalidRequest_InvalidStatus();
    }
  };

  static ExecTaskValidations = (title: string, description: string, status: string) => {
    this.VerifyTitle(title);
    this.VerifyDescription(description);
    this.VerifyStatus(status);
  };
}
