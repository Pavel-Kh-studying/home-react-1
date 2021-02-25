import React, { Component } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import styles from './Calendar.module.css';

class Calendar extends Component {
  render() {
    return (
      <article className={styles.calendar}>
        <section className={styles.sectionLeft}>
          <LeftSide date={new Date()}/>
        </section>
        <section className={styles.sectionRight}>
          <RightSide date={new Date()}/>
        </section>
      </article>
    );
  }
}

export default Calendar;