export interface iTaskModel {
  id?: number;
  title: string;
  responsible: string;
  isCompleted: boolean;
}

export class Task implements iTaskModel {
  id: number;
  isCompleted: boolean;
  static generateId(): number {
    return Math.floor(Math.random() * 100_000);
  }
  constructor(public title: string, public responsible: string) {
    this.id = Task.generateId();
    this.isCompleted = false;
  }
}
