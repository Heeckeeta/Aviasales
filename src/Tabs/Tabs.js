import { useSelector, useDispatch } from 'react-redux';

import { onTab } from '../store/tabsSlice.js';
import { onShowNoun } from '../store/ticketsSlice.js';

import styles from './Tabs.module.scss';

export default function Tabs() {
  const tab = useSelector((store) => store.tabs.tab);
  const dispatch = useDispatch();
  const classes = [styles.tab, styles.tab, styles.tab];
  if (tab === 'cheap') classes[0] += ' ' + styles.selected;
  if (tab === 'fast') classes[1] += ' ' + styles.selected;
  if (tab === 'optimal') classes[2] += ' ' + styles.selected;
  const onTabCheap = () => {
    dispatch(onTab('cheap'));
    if (tab !== 'cheap') dispatch(onShowNoun());
  };
  const onTabFast = () => {
    dispatch(onTab('fast'));
    if (tab !== 'fast') dispatch(onShowNoun());
  };
  const onTabOptimal = () => {
    dispatch(onTab('optimal'));
    if (tab !== 'optimal') dispatch(onShowNoun());
  };
  return (
    <div className={styles.tabs}>
      <div className={classes[0]} onClick={onTabCheap}>
        самый дешевый
      </div>
      <div className={classes[1]} onClick={onTabFast}>
        самый быстрый
      </div>
      <div className={classes[2]} onClick={onTabOptimal}>
        оптимальный
      </div>
    </div>
  );
}
