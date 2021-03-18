import uniqid from 'uniqid';
import boy1 from '../img/boy_1.png';
import boy2 from '../img/boy_2.png';
import boy3 from '../img/boy_3.png';
import girl1 from '../img/girl_1.png';
import girl2 from '../img/girl_2.png';
import girl3 from '../img/girl_3.png';

const AVATARS = {
  'boy_1.png': boy1,
  'boy_2.png': boy2,
  'boy_3.png': boy3,
  'girl_1.png': girl1,
  'girl_2.png': girl2,
  'girl_3.png': girl3,
};

const TIME = [...Array(9)].map((el, i) => `1${i}:00`);
const DAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DATES = TIME.reduce((arr, time) => {
  const obj = { time, days: DAY.map((day) => ({ day: day.slice(0, 3), event: null })) };

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

export {
  DAY,
  TIME,
  DATES,
  setEventsIntoDays,
  createPopUp,
  AVATARS,
};
