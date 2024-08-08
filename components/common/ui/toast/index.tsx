import { CrossSmall } from "components/icons";
import { isDev } from "general-config";
import { AppContext } from "lib/context";
import Image from "next/image";
import React, { useState, useEffect, useContext, useRef } from "react";
import ReactDOM from "react-dom";

type NotificationProps = {
  position?: string;
  autoDelete?: boolean;
  autoDeleteTime?: number;
  toast?: { id: number; toast: string };
  onDelete?: Function;
};

interface AlertProps {
  id?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

const Toast = ({
  position = "top-right",
  toast = null,
  autoDelete = true,
  autoDeleteTime = 5000,
  onDelete = (): void => null,
}: NotificationProps): JSX.Element => {
  const toastRef = useRef(null);

  useEffect(() => {
    let interval: NodeJS.Timer = null
    if (autoDelete) {
      interval = setInterval(() => {
        if (autoDelete && toast?.id >= 0) {
          onDelete(toast?.id, toastRef);
        }
      }, autoDeleteTime);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={toastRef}
      className={`notification toast ${position}`}
      // style={{ backgroundColor: toast?.backgroundColor }}
    >
      <div className="inner-content">
        <div className="img">
          <Image
            src="/alert.svg"
            width={22}
            height={22}
            layout="fixed"
            alt="alert-img"
            // unoptimized={isDev}
            />
        </div>
        <div className="divider"></div>
        <div className="content">
          {/* <p className="notification-title">{toast?.title}</p> */}
          <p
            className="notification-message"
            dangerouslySetInnerHTML={{ __html: toast?.toast }}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="close-btn">
        <button>
          <CrossSmall
            color="#000"
            onClick={() => onDelete(toast?.id, toastRef)}
            width={"15px"}
            height={"15px"}
          />
        </button>
      </div>
    </div>
  );
};

export default Toast;
