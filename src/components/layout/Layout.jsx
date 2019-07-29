import React from 'react';
import './Layout.scss';

const Layout = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={'admin-ui-layout'} {...restProps}>
      {props.children}
    </div>
  );
};
export default Layout;
