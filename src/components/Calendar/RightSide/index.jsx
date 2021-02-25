import { getYear } from 'date-fns';
import { getWeeksInMonth } from 'date-fns';
import { startOfMonth } from 'date-fns';
import { endOfMonth } from 'date-fns';
import { getDate } from "date-fns";
import styles from './RightSide.module.css';

function RightSide(props) { 
  const { date } = props;

  const month = date.toLocaleString('en', {month: 'long'});
  const year = getYear(date);

  const arrOfLi = ['s', 'm', 't', 'w', 't', 'f', 's'].map( (day, i) => {
    return <li key={'day-' + i} className={styles.weekDaysNameLi}>{day}</li>
  })

  const arrOfWeeks = Array(getWeeksInMonth(date)).fill().map((v, i) => {
    let week = new Array(7).fill();

    return <ul key={'week-' + i} className={styles.weekDaysUl}>
      { 
        week.map((v, j) => {
          const currentDay = i * 7 + j;
          const day = currentDay - startOfMonth(date).getDay() + 1;
          const nonCurrentMonthDay = <li key={'day-' + currentDay} className={styles.weekDaysLi}></li>;
          const CurrentMonthDay = <li key={'day-' + currentDay} className={styles.weekDaysLi}>{day}</li>;
          const todaysDay = <li key={'day-' + currentDay} className={styles.weekDaysLiCurrent}>{day}</li>;

          if (day === getDate(date)) {
            return week[j] = todaysDay;
          }
          if (i === 0) {
            if (currentDay <  startOfMonth(date).getDay()) {
              return week[j] = nonCurrentMonthDay;
            }
            return week[j] = CurrentMonthDay;
          }
          if (currentDay > (endOfMonth(date).getDate()) + startOfMonth(date).getDay() - 1) {
            return week[j] = nonCurrentMonthDay;
          }
          return week[j] = CurrentMonthDay;
        })
      }
    </ul>
  });

  return (
    <>
      <p className={styles.date}>{month} {year}</p>
      <ul className={styles.weekDaysNameUl}>{arrOfLi}</ul>
      <section className={styles.calendarContainer}>{arrOfWeeks}</section>
    </>
  );
}

export default RightSide;