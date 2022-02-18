import { Fragment } from 'react';

import classes from './Header.module.css';
import headerImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>RactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='A table full of food' />
      </div>
    </Fragment>
  );
};

export default Header;
