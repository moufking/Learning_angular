import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService {
  private user: User[] = [
    {
      firstame: 'Alaofe',
      lastname: 'Moufid',
      email: 'moufking337@gmail.com',
      hobby: 'Natation'

    }
  ];
  usersubject = new Subject<User[]>();

  emitUser() {
    this.usersubject.next(this.user.slice());
  }
  addUser(user: User) {
    this.user.push(user);
    this.emitUser();
  }
}
