import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={styles.labelName}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

 export default Filter;