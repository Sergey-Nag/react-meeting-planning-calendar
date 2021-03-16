import User from './User';

export default class Admin extends User {
  constructor(props) {
    super(props);

    this.access = {
      createEvents: true,
      deleteEvents: true,
      editEvents: true,
    };
  }
}
