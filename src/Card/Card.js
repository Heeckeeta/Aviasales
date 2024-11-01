import { add } from 'date-fns';

import styles from './Card.module.scss';

export default function Card({ info }) {
  const count = (len) => {
    if (len === 0) return 'Прямой рейс';
    if (len === 1) return '1 пересадка';
    if (len === 2) return '2 пересадки';
    if (len === 3) return '3 пересадки';
  };

  const timeIn = (date, duration) => {
    const d = new Date(date);
    const newD = add(d, { minutes: duration });
    const double = (h) => {
      return String(h).length === 1 ? '0' + h : h;
    };
    return `${double(d.getHours())}:${d.getMinutes()} - ${double(newD.getHours())}:${newD.getMinutes()}`;
  };

  return (
    <li className={styles.li}>
      <div className={styles.card}>
        <div className={styles.line}>
          <p className={styles.price}>{info.price} P</p>
          <div className={styles.card__logo}>
            <img src={`https://images.daisycon.io/airline/?width=110&height=36&iata=${info.carrier}`} />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.item}>
            <p className={styles.info1}>
              {info.segments[0].origin} - {info.segments[0].destination}
            </p>
            <p className={styles.info2}>{timeIn(info.segments[0].date, info.segments[0].duration)}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.info1}>в пути</p>
            <p className={styles.info2}>
              {(info.segments[0].duration / 60).toFixed(0)}ч {info.segments[0].duration % 60}м
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.info1}>{count(info.segments[0].stops.length)}</p>
            <p className={styles.info2}>{info.segments[0].stops.join(',')}</p>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.item}>
            <p className={styles.info1}>
              {info.segments[1].origin} - {info.segments[1].destination}
            </p>
            <p className={styles.info2}>{timeIn(info.segments[0].date, info.segments[0].duration)}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.info1}>в пути</p>
            <p className={styles.info2}>
              {(info.segments[1].duration / 60).toFixed(0)}ч {info.segments[1].duration % 60}м
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.info1}>{count(info.segments[1].stops.length)}</p>
            <p className={styles.info2}>{info.segments[1].stops.join(',')}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
