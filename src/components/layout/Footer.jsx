import React from 'react';

const Footer = (props) => {
  return (
    <div className={'admin-ui-footer'}>
      {props.children}
    </div>
  );
};

export default Footer;
