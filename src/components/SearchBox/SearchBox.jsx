import { HiSearch } from "react-icons/hi";
import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <HiSearch className={css.icon} />
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
