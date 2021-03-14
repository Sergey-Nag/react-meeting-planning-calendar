// import { showPopup } from './alerts';
import Storage from './Storage';

class NotifierQueryStorage extends Storage {
  constructor(storage) {
    super();

    this.storage = storage;
  }
}

export default class NotifyResponse extends NotifierQueryStorage {
  async getAllUsers() {
    let users = null;

    try {
      users = await this.storage.getAllUsers();

      // if (users)
      //   showPopup(
      //     'success',
      //     '<i class="bi font-icon bi-cloud-check"></i> Users successfully loaded'
      //   );
      // else throw new Error();
    } catch (e) {
      // showPopup(
      //   'danger',
      //   '<i class="bi font-icon bi-cloud-slash-fill">
      // </i> <b>Loading Users error</b>, please, try again'
      // );
    }

    return users;
  }

  async getPreFilteredEvents() {
    let events = null;

    try {
      events = await this.storage.getPreFilteredEvents();

      if (typeof this.storage.preFilter === 'function') return events;

    //   if (events.length === 0)
    //     showPopup(
    //       'warning',
    //       '<i class="bi font-icon bi-cloud-check"></i> Not enough events to display'
    //     );
    //   else if (events)
    //     showPopup(
    //       'success',
    //       '<i class="bi font-icon bi-cloud-check"></i> Events successfully loaded'
    //     );
    //   else throw new Error();
    } catch (e) {
    //   showPopup(
    //     'danger',
    //     '<i class="bi font-icon
    //  bi-cloud-slash-fill"></i> <b>Loading Events error</b>, please, try again'
    //   );
    }

    return events;
  }

  async setEvent(data) {
    try {
      const setQuery = await this.storage.setEvent(data);
      // if (setQuery)
      //   showPopup('success', `Event "${data.title}" was successfully created`);
      // else throw new Error();
    } catch (e) {
      // showPopup(
      //   'danger',
      //   '<i class="bi font-icon bi-cloud-slash-fill">
      // </i> <b>Create Event error</b>, please, try again'
      // );
      // return false;
    }

    return true;
  }

  async updateEvent(...args) {
    try {
      const updQuery = await this.storage.updateEvent(...args);

      // if (updQuery)
      //   showPopup(
      //     'success',
      //     '<i class="bi bi-cloud-check"></i> Event was successfully updated'
      //   );
      // else throw new Error();
    } catch (e) {
      // showPopup(
      //   'danger',
      //   '<i class="bi bi-cloud-slash-fill"></i> <b>Event wasn\'t updated</b>, please, try again'
      // );
      return false;
    }

    return true;
  }

  async removeEvent(id) {
    try {
      const deleteQuery = await this.storage.removeEvent(id);

      // if (deleteQuery)
      //   showPopup(
      //     'success',
      //     '<i class="bi font-icon bi-trash"></i> Event successfully deleted'
      //   );
      // else throw new Error();
    } catch (e) {
      // showPopup(
      //   'danger',
      //   '<i class="bi font-icon bi-trash-fill"></i> <b>Deleting Events error</b>, please try again'
      // );
      // return false;
    }

    return true;
  }
}
