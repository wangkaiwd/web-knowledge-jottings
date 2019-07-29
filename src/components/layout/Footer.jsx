import React from 'react';
import cls from 'classnames';
import './Footer.scss';

const Footer = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={cls('admin-ui-footer', className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Footer;
