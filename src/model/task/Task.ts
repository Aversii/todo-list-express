import { randomUUID } from "crypto";
import { TaskValidations } from "../validations/TaskValidations";

export class Task {
  private readonly id: string;
  private title: string;
  private description: string;
  private status: string;
  private userId: string;
  private createdAt: Date;
  private updatedAt: Date;

  private constructor(
    title: string,
    description: string,
    status: string,
    userId: string
  ) {
    this.id = randomUUID();
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    // Executa as validações de tarefa
    TaskValidations.ExecTaskValidations(this.title, this.description, this.status);
  }

  public static async create(
    title: string,
    description: string,
    status: string,
    userId: string
  ): Promise<Task> {
    TaskValidations.ExecTaskValidations(title, description, status);
    return new Task(title, description, status, userId);
  }

  public GetId() {
    return this.id;
  }

  public GetTitle() {
    return this.title;
  }

  public SetTitle(newTitle: string) {
    this.title = newTitle;
    this.updatedAt = new Date();
  }

  public GetDescription() {
    return this.description;
  }

  public SetDescription(newDescription: string) {
    this.description = newDescription;
    this.updatedAt = new Date();
  }

  public GetStatus() {
    return this.status;
  }

  public SetStatus(newStatus: string) {
    this.status = newStatus;
    this.updatedAt = new Date();
  }

  public GetUserId() {
    return this.userId;
  }

  public GetCreatedAt() {
    return this.createdAt;
  }

  public GetUpdatedAt() {
    return this.updatedAt;
  }
}
