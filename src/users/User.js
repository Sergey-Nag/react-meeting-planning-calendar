export default class User {
  constructor({ id, name, avatar }) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;

    this.access = {
      createEvents: false,
      deleteEvents: false,
      editEvents: false,
      filterEvents: false,
    };
  }
}
