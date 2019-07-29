import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './Sider.scss';

const Sider = (props) => {
  const { className, collapsed, style, ...restProps } = props;
  const getStyle = () => {
    if (!collapsed) {
      return {
        width: '200px',
        minWidth: '200px'
      };
    }
    return {
      width: 'auto',
      minWidth: '10px'
    };
  };
  return (
    <div
      className={cls('admin-ui-sider', className, { collapsed })} {...restProps}
      style={{ ...style, ...getStyle() }}
    >
      {props.children}
    </div>
  );
};
Sider.propTypes = {
  collapsed: PropTypes.bool
};
Sider.defaultProps = {
  collapsed: false
};
export default Sider;
