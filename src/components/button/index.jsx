import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const prefixCls = 'wui-button';

// 按钮主题类型
const types = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  default: 'default',
  primary: 'primary',
  link: 'link',
  info: 'info',
};

// 按钮尺寸
const sizes = {
  small: 'small',
  default: 'default',
  large: 'large',
};

// 按钮形状
const shapes = {
  circle: 'circle',
  default: 'default',
  round: 'round',
};

function Button(props) {
  const {
    children,
    onClick,
    className,
    type,
    shape,
    size,
    href,
    dashed,
    block,
    disabled,
    loading,
    hollow,
  } = props;
  console.log(hollow, `${prefixCls}-btn-${type}`);
  // 外层样式
  const wrapCls = cls({
    className,
    [`${prefixCls}`]: true,
    [`${prefixCls}-block`]: block,
  });
  // 按钮样式
  const btnCls = cls({
    className,
    [`${prefixCls}-btn`]: true,
    [`${prefixCls}-btn-${type}`]: true,
    [`btn-shape-${shape}`]: shape !== shapes.default,
    [`btn-size-${size}`]: size !== sizes.default,
    'btn-hollow': hollow,
    'btn-disabled': disabled,
    'btn-block': block,
    'btn-dashed': dashed,
    'btn-loading': loading,
  });
  console.log(btnCls);
  const isDisabled = disabled ? { disabled: true } : { onClick };

  return (
    <div className={wrapCls} onClick={onClick}>
      <button type='button' {...isDisabled} className={btnCls}>
        <span>{children}</span>
      </button>
    </div>
  );
}

Button.defaultProps = {
  disabled: false,
  href: '',
  size: sizes.default,
  type: types.default,
  shape: shapes.default,
  block: false,
  loading: false,
  hollow: false,
  shapes: false,
  dashed: false,
  onClick: () => {},
};

Button.propTypes = {
  // 主题
  type: PropTypes.oneOf(Object.values(types)),
  // 形状
  shapes: PropTypes.oneOf(Object.values(shapes)),
  // 空心
  hollow: PropTypes.bool,
  // 尺寸
  size: PropTypes.oneOf(Object.values(sizes)),
  // 类名
  className: PropTypes.string,
  // 子元素
  children: PropTypes.node,
};

export default Button;
