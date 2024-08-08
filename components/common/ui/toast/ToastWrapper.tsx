import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Toast from ".";
import { AppContext } from "lib/context";
import ReactDOM from "react-dom";

const ToastWrapper = () => {
  const { toastList, setToastList } = useContext(AppContext);
  const [toastPortal, settoastPortal] = useState<any>("");
  const autoDelete = true;
  const autoDeleteTime = 5000;
  const position = "top-right";

  useEffect(() => {
    setToastList([])
    const div = document.getElementById("portal");
    div && settoastPortal(div);
  }, []);

  const deleteToast = (id: number, toastRef: RefObject<HTMLDivElement>) => {
    toastRef.current?.addEventListener("animationend", (event) => {

      toastRef.current?.remove();
    });
    toastRef.current?.classList?.add("removeToast");
  };

  return toastPortal
    ? ReactDOM.createPortal(
        <>
          <div className={`notification-container ${position}`}>
            {toastList &&
              toastList.length > 0 &&
              toastList.map((toast: string, index: number) => {
                return (
                  <Toast
                    key={index}
                    autoDelete={autoDelete}
                    autoDeleteTime={autoDeleteTime}
                    toast={{ id: index, toast: toast }}
                    onDelete={deleteToast}
                  />
                );
              })}
          </div>
        </>,
        toastPortal
      )
    : null;
};

export default ToastWrapper;
