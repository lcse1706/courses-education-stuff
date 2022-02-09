import React from 'react';

import classes from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';
import ReactDom from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onSubmitError} />;
};

const Modal = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={classes.content}>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onSubmitError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onSubmitError={props.onSubmitError} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onSubmitError={props.onSubmitError}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ErrorModal;
