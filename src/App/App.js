import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import { searchId, getTickets } from '../store/ticketsSlice.js';
import Check from '../Check/Check.js';
import List from '../List/List.js';
import logo from '../images/Logo.png';

import styles from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();
  const id = useSelector((store) => store.tickets.id);
  const load = useSelector((store) => store.tickets.load);

  useEffect(() => {
    if (!id) dispatch(searchId());
    else dispatch(getTickets());
  }, [dispatch, id]);

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} />
        {load && <Spin className={styles.spin} />}
      </div>
      <Check />
      <List />
    </main>
  );
}
