import React from 'react';

import classes from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onSubmitError} />
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
    </div>
  );
};

export default ErrorModal;
