import uniqid from 'uniqid';

const TIME = [...Array(9)].map((el, i) => `1${i}:00`);
const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const DATES = TIME.reduce((arr, time) => {
  const obj = { time, days: DAY.map((day) => ({ day, event: null })) };

  arr.push(obj);

  return arr;
}, []);

function setEventsIntoDays(arr) {
  return DATES.map(({ time, days }) => ({
    time,
    days: days.map(({ day }) => {
      const dayEvent = arr.find(
        ({ data }) => data.day === day && data.time === time,
      );

      let newEvent = null;

      if (dayEvent) {
        newEvent = {
          id: dayEvent.id,
          ...{ ...dayEvent.data },
        };
      }

      return { day, event: newEvent };
    }),
  }));
}

function createPopUp(alert, setAlert) {
  return (theme, text) => {
    const SET = (lst) => (
      alert.type === 'popup'
        ? { ...alert, list: lst }
        : { show: true, type: 'popup', list: lst }
    );

    const list = alert.list ? [...alert.list] : [];
    const lastNum = alert.list?.length > 0 ? list[list.length - 1].num + 1 : 1;

    list.push({
      num: lastNum,
      id: uniqid(),
      theme,
      text,
    });

    setAlert(SET(list));
  };
}

export { DAY, TIME, DATES, setEventsIntoDays, createPopUp };
