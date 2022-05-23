import { User } from './models';

const user = User.buildUser({ id: 2 });

user.on('change', () => console.log('User has been changed!', user));

user.fetch();
