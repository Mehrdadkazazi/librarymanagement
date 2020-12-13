import {AbstractUserModel} from './abstract-user.model';

export class UserModel extends AbstractUserModel{
  cardId ?: number;
  name ?: string;
  family ?: string;
  birthDate ?: string;
  address ?: string;
  nationalCode ?: string;
  activation ?: number;

  constructor() {
    super();
    this.cardId = 0 ;
    this.name = '' ;
    this.family = '' ;
    this.birthDate ='' ;
    this.address = '' ;
    this.nationalCode = '' ;
    this.activation = 1;
  }
}
