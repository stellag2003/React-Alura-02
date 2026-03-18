import styles from "./menu.link.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MeuLink({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      className={`
            ${styles.link} 
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
          `}
      to={to}
    >
      {children}
    </Link>
  );
}
