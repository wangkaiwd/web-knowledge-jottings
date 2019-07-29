import React from 'react';
import cls from 'classnames';
import './Header.scss';

const Header = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={cls('admin-ui-header', className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Header;
