import Storage from './Storage';

class NotifierQueryStorage extends Storage {
  constructor(storage, showPopup) {
    super();

    this.showPopup = showPopup;
    this.storage = storage;
  }
}

export default class NotifyResponse extends NotifierQueryStorage {
  async getAllUsers() {
    let users = null;

    try {
      users = await this.storage.getAllUsers();

      if (users) {
        this.showPopup('success', 'Users successfully loaded');
      } else throw new Error();
    } catch (e) {
      this.showPopup('danger', 'Loading Users error, please, try again');
    }

    return users;
  }

  async getPreFilteredEvents() {
    let events = null;

    try {
      events = await this.storage.getPreFilteredEvents();

      if (typeof this.storage.preFilter === 'function') return events;

      if (events.length === 0) {
        this.showPopup('warning', 'Not enough events to display');
      } else if (events) {
        this.showPopup('success', 'Events successfully loaded');
      } else throw new Error();
    } catch (e) {
      this.showPopup('danger', 'Loading Events error, please, try again');
    }

    return events;
  }

  async setEvent(data) {
    try {
      const setQuery = await this.storage.setEvent(data);
      if (setQuery) {
        this.showPopup(
          'success',
          `Event "${data.title}" was successfully created`,
        );
      } else throw new Error();
    } catch (e) {
      this.showPopup('danger', 'Create Event error, please, try again');
      return false;
    }

    return true;
  }

  async updateEvent(...args) {
    try {
      const updQuery = await this.storage.updateEvent(...args);

      if (updQuery) {
        this.showPopup('success', 'Event was successfully updated');
      } else throw new Error();
    } catch (e) {
      this.showPopup('danger', "Event wasn't updated, please, try again");
      return false;
    }

    return true;
  }

  async removeEvent(id) {
    try {
      const deleteQuery = await this.storage.removeEvent(id);

      if (deleteQuery) {
        this.showPopup('success', 'Event successfully deleted');
      } else throw new Error();
    } catch (e) {
      this.showPopup('danger', 'Deleting Events error, please try again');
      return false;
    }

    return true;
  }
}
