import React from 'react';

const Sider = (props) => {
  return (
    <div className={'admin-ui-sider'}>
      {props.children}
    </div>
  );
};

export default Sider;
