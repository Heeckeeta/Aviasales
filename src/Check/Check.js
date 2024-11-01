import { useSelector, useDispatch } from 'react-redux';

import { onAll, onWithout, onOne, onTwo, onThree } from '../store/checkboxesSlice.js';
import { onShowNoun } from '../store/ticketsSlice.js';

import styles from './Check.module.scss';

export default function Check() {
  const checks = useSelector((store) => store.checks);
  const dispatch = useDispatch();

  const onAllD = () => {
    dispatch(onAll());
    dispatch(onShowNoun());
  };
  const onWithoutD = () => {
    dispatch(onWithout());
    dispatch(onShowNoun());
  };
  const onOneD = () => {
    dispatch(onOne());
    dispatch(onShowNoun());
  };
  const onTwoD = () => {
    dispatch(onTwo());
    dispatch(onShowNoun());
  };
  const onThreeD = () => {
    dispatch(onThree());
    dispatch(onShowNoun());
  };

  return (
    <div className={styles.check}>
      <p className={styles.count}>количество пересадок</p>
      <form className={styles.check__form}>
        <label className={styles.check__label}>
          <input className={styles.check__checkbox} type="checkbox" checked={checks.all} onChange={onAllD} />
          <span className={styles.check__img} />
          <span className={styles.check__text}>Все</span>
        </label>
        <label className={styles.check__label}>
          <input className={styles.check__checkbox} type="checkbox" checked={checks.without} onChange={onWithoutD} />
          <span className={styles.check__img} />
          <span className={styles.check__text}>Без пересадок</span>
        </label>
        <label className={styles.check__label}>
          <input className={styles.check__checkbox} type="checkbox" checked={checks.one} onChange={onOneD} />
          <span className={styles.check__img} />
          <span className={styles.check__text}>1 пересадка</span>
        </label>
        <label className={styles.check__label}>
          <input className={styles.check__checkbox} type="checkbox" checked={checks.two} onChange={onTwoD} />
          <span className={styles.check__img} />
          <span className={styles.check__text}>2 пересадки</span>
        </label>
        <label className={styles.check__label}>
          <input className={styles.check__checkbox} type="checkbox" checked={checks.three} onChange={onThreeD} />
          <span className={styles.check__img} />
          <span className={styles.check__text}>3 пересадки</span>
        </label>
      </form>
    </div>
  );
}
