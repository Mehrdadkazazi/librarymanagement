export class AbstractUserModel {
  id: number;
  jwt: string;
  username: string;
  password: string;
  role: string;

  constructor() {
    this.id = 0;
    this.jwt = '';
    this.username = '';
    this.password = '';
    this.role = '';
  }
}
