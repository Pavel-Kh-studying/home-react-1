import { getDate } from "date-fns";
import styles from './LeftSide.module.css';

function LeftSide(props) {
  const { date } = props;

  const dayOfWeek = date.toLocaleString('en', {weekday: 'long'});
  const dayOfMonth = getDate(date);

  return ( 
    <>
      <p className={styles.dayOfWeek}>{dayOfWeek}</p>
      <p className={styles.dayOfMonth}>{dayOfMonth}</p>
    </>
  );
}

export default LeftSide;