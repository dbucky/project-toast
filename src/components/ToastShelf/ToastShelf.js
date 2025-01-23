import React from 'react';

import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
  function handleDismiss(id) {
    console.log('handleDismiss', id);
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  console.log({ toasts });

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              handleDismiss={() => {
                handleDismiss(toast.id);
              }}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
