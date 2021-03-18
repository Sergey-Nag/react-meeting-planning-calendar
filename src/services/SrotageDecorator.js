import Storage from './Storage';
import store from '../reduxStore/store';
import { showPopup as popup } from '../reduxStore/actions/alertActions';

const showPopup = (...args) => {
  store.dispatch(popup(...args));
};

class NotifierQueryStorage extends Storage {
  constructor(storage) {
    super();

    this.storage = storage;
  }
}

export default class NotifyResponse extends NotifierQueryStorage {
  async getAllEvents() {
    let events = null;

    try {
      events = await this.storage.getAllEvents();

      if (events) {
        showPopup('success', 'Events successfully loaded');
      } else throw new Error();
    } catch (e) {
      showPopup('danger', 'Loading Events error, please, try again');
    }

    return events;
  }

  async getAllUsers() {
    let users = null;

    try {
      users = await this.storage.getAllUsers();

      if (users) {
        showPopup('success', 'Users successfully loaded');
      } else throw new Error();
    } catch (e) {
      showPopup('danger', 'Loading Users error, please, try again');
    }

    return users;
  }

  async getPreFilteredEvents() {
    let events = null;

    try {
      events = await this.storage.getPreFilteredEvents();

      if (typeof this.storage.preFilter === 'function') return events;

      if (events.length === 0) {
        showPopup('warning', 'Not enough events to display');
      } else if (events) {
        showPopup('success', 'Events successfully loaded');
      } else throw new Error();
    } catch (e) {
      showPopup('danger', 'Loading Events error, please, try again');
    }

    return events;
  }

  async setEvent(data) {
    try {
      const setQuery = await this.storage.setEvent(data);
      if (setQuery) {
        showPopup('success', `Event "${data.title}" was successfully created`);
      } else throw new Error();
    } catch (e) {
      showPopup('danger', 'Create Event error, please, try again');
      return false;
    }

    return true;
  }

  async updateEvent(...args) {
    try {
      const updQuery = await this.storage.updateEvent(...args);

      if (updQuery) {
        showPopup('success', 'Event was successfully updated');
      } else throw new Error();
    } catch (e) {
      showPopup('danger', "Event wasn't updated, please, try again");
      return false;
    }

    return true;
  }

  async removeEvent(id) {
    try {
      const deleteQuery = await this.storage.removeEvent(id);

      if (deleteQuery) {
        showPopup('success', 'Event successfully deleted');
      } else throw new Error();
    } catch (e) {
      showPopup('danger', 'Deleting Events error, please try again');
      return false;
    }

    return true;
  }
}
