import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  function addToast(message, variant) {
    setToasts([
      ...toasts,
      {
        id: Math.random(),
        variant,
        message,
      },
    ]);
  }

  function removeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
