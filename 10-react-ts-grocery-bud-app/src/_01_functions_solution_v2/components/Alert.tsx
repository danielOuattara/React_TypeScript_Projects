import { useEffect } from "react";
import AlertType from "../types/AlertType";

export default function Alert({
  type,
  msg,
  showAlert,
}: {
  type: AlertType["type"];
  msg: AlertType["type"];
  showAlert: Function;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 1500);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}
