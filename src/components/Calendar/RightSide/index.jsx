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

  const arrOfWeeks = Array(getWeeksInMonth(date)).fill().map((nonUsingValue, indexOfWeek) => {
    const week = new Array(7).fill();

    return <ul key={'week-' + indexOfWeek} className={styles.weekDaysUl}>
      { 
        week.map((weekCurrentDay, indexOfDay) => {
          const currentDay = indexOfWeek * 7 + indexOfDay;
          const day = currentDay - startOfMonth(date).getDay() + 1;

          function renderLi(contentLi, stylesLi) {
            return <li key={'day-' + currentDay} className={stylesLi}>{contentLi}</li>
          }

          const nonCurrentMonthDay = renderLi('', styles.weekDaysLi);
          const currentMonthDay = renderLi(day, styles.weekDaysLi);
          const todaysDay = renderLi(day, styles.weekDaysLiCurrent);

          if (day === getDate(date)) {
            return weekCurrentDay = todaysDay;
          }
          if (indexOfWeek === 0) {
            if (currentDay <  startOfMonth(date).getDay()) {
              return weekCurrentDay = nonCurrentMonthDay;
            }
            return weekCurrentDay = currentMonthDay;
          }
          if (currentDay > (endOfMonth(date).getDate()) + startOfMonth(date).getDay() - 1) {
            return weekCurrentDay = nonCurrentMonthDay;
          }
          return weekCurrentDay = currentMonthDay;
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