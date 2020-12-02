export class AbstractUser {
  id: number;
  jwt: string;
  userName: string;
  password: string;
  role: string;

  constructor() {
    this.id = 0;
    this.jwt = '';
    this.userName = 'admin';
    this.password = '12345678';
    this.role = '';
  }
}
