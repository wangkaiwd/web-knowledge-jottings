import React, { useEffect } from 'react';
import cls from 'classnames';
import './Layout.scss';

const Layout = (props) => {
  const { className, ...restProps } = props;
  const hasSider = props.children.some(child => child.type.name === 'Sider');
  return (
    <div className={cls('admin-ui-layout', className, { hasSider })} {...restProps}>
      {props.children}
    </div>
  );
};
export default Layout;
