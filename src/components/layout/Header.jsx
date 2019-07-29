import React from 'react';

const Header = (props) => {
  return (
    <div className={'admin-ui-header'}>
      {props.children}
    </div>
  );
};

export default Header;
