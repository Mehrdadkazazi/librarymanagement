import {AbstractUser} from './abstract-user';

export class UserModel extends AbstractUser{
  cardId ?: number;
  name ?: string;
  family ?: string;
  birthDate ?: string;
  address ?: string;
  nationalCode ?: string;

  constructor() {
    super();
    this.cardId = 0 ;
    this.name = '' ;
    this.family = '' ;
    this.birthDate ='' ;
    this.address = '' ;
    this.nationalCode = '' ;
  }
}
