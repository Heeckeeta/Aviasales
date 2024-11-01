import { useSelector, useDispatch } from 'react-redux';

import { onShow } from '../store/ticketsSlice.js';
import Tabs from '../Tabs/Tabs.js';
import Card from '../Card/Card.js';
import filterSort from '../filterSort.js';

import styles from './List.module.scss';

let key = 100;

export default function List() {
  const dispatch = useDispatch();
  let tickets = useSelector((store) => store.tickets.tickets);
  const countOfTickets = useSelector((store) => store.tickets.countOfTickets);
  const tab = useSelector((store) => store.tabs.tab);
  const checks = useSelector((store) => store.checks);

  const slice = tickets.length > countOfTickets ? countOfTickets : tickets.length;
  tickets = filterSort(tickets, tab, checks).slice(0, slice);

  return (
    <section className={styles.section}>
      <Tabs />
      {tickets.length ? (
        <>
          <ul className={styles.list}>
            {tickets.map((ticket) => (
              <Card key={key++} info={ticket} />
            ))}
          </ul>
          <button className={styles.show} onClick={() => dispatch(onShow())}>
            показать еще 5 билетов!
          </button>
        </>
      ) : (
        <p className={styles.empty}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}
    </section>
  );
}
