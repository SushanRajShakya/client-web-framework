import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { UserProps } from '../types';
import { Eventing } from './Eventing';
import { API_URL } from '../constants';
import { Attributes } from './Attributes';
import { Collection } from './Collection';

export class User extends Model<UserProps> {
  static buildUser(userData: UserProps): User {
    return new User(
      new Attributes<UserProps>(userData),
      new Eventing(),
      new ApiSync<UserProps>(API_URL)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(API_URL, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}
