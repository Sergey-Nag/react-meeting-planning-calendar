import { Table } from 'react-bootstrap';
import Card from './Card';

export default function Calendar() {
  const data = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    times: [...Array(9)].map((el, i)=> `1${i}:00`)
  }

  return (
    <Table bordered className="calendar">
      <thead className="calendar__head">
        <tr className="text-center">
          <th>Time</th>
          { 
            data.days.map((head, i) => (
              <th key={i} className="calendar__col">{head}</th>
            ))
          }
        </tr>
      </thead>
      <tbody className="calendar__body">
        { 
          data.times.map((time, i)=> (
              <tr key={i}>
                <th key="i">{time}</th>

                { data.days.map((day, j)=>(
                    <td 
                      key={i+'-'+j} 
                      data-day={day} 
                      data-time={time}
                    >
                      <Card />
                    </td>
                  )) }

              </tr>
            )) 
          }
      </tbody>
    </Table>
  );
}