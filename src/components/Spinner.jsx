import { FaSpinner } from "react-icons/fa";
import style from "./spinner.module.css";

export function Spinner() {
  return (
    <div className={style.spinner}>
      <FaSpinner size={60} />
    </div>
  );
}
