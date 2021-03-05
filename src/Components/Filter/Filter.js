import s from './Filter.module.css';

const Filter = ({ onFilterChanged }) => {
  const handleFilterChanged = e => {
    const value = e.currentTarget.value;
    onFilterChanged(value);
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.text} type="text" onChange={handleFilterChanged}></input>
    </label>
  );
};

export default Filter;
