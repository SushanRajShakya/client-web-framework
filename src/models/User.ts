import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

interface UserProps {
  id?: number;
  age?: number;
  name?: string;
}

export class User extends Model<UserProps> {
  static buildUser(userData: UserProps): User {
    return new User(
      new Attributes<UserProps>(userData),
      new Eventing(),
      new ApiSync<UserProps>()
    );
  }
}
