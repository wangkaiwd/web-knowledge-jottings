import React from 'react';
import './Content.scss';
import cls from 'classnames';

const Content = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={cls('admin-ui-content', className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Content;
