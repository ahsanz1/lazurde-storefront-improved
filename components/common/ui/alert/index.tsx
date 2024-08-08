import { CrossSmall } from "components/icons";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface NotificationProps {
  toastList?: any;
  position?: string;
  autoDelete?: boolean;
  autoDeleteTime?: number;
  onDelete?: () => void;
}

interface AlertProps {
  id?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

const Notification = (props: NotificationProps): JSX.Element => {
  const { toastList, position, autoDelete, autoDeleteTime, onDelete } = props;
  const [list, setList] = useState(toastList);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  const deleteToast = (id: string | number) => {
    const listItemIndex = list?.findIndex((e: any) => e.id === id);
    const toastListItem = toastList?.findIndex((e: any) => e.id === id);
    toastRef.current?.addEventListener("animationend", (event) => {
      list?.splice(listItemIndex, 1);
      toastList?.splice(toastListItem, 1);
      setList([...list]);
      onDelete && onDelete();
    });
    toastRef?.current?.classList?.add("removeToast");
  };
  const [alertContainer, setAlertContainer] = useState<any>("");
  useEffect(() => {
    const div = document.getElementById("portal");
    div && setAlertContainer(div);
  }, []);

  return alertContainer
    ? ReactDOM.createPortal(
        <>
          {list && list.length > 0 && (
            <div className={`notification-container ${position}`}>
              {list.map((toast: AlertProps, index: number) => (
                <div
                  ref={toastRef}
                  key={index}
                  className={`notification toast ${position}`}
                  style={{ backgroundColor: toast?.backgroundColor }}
                >
                  <div className="inner-content">
                    <div className="img">
                      <Image
                        src="/alert.svg"
                        width={22}
                        height={22}
                        layout="fixed"
                        alt="alert-img"
                      />
                    </div>
                    <div className="divider"></div>
                    <div className="content">
                      <p className="notification-title">{toast?.title}</p>
                      <p
                        className="notification-message"
                        dangerouslySetInnerHTML={{ __html: toast?.description }}
                      />
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="close-btn">
                    <button>
                      <CrossSmall
                        color="#000"
                        onClick={() => deleteToast(toast?.id)}
                        width={"15px"}
                        height={"15px"}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>,
        alertContainer
      )
    : null;
};

export default Notification;
