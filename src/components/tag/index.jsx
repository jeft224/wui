import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './index.scss';

const prefixCls = 'wui-tag'

function Tag (props) {
  const { color, className, style, children, closable, visible, onClose } = props
  const tag = useRef()

  const colorCls = {
    color: color ? '#fff':'',
    border: color ? `1px solid ${color}`:''
  }

  const wrapCls = ClassNames({
    [className]: !!className,
    [prefixCls]: true,
  })
  // 关闭标签的事件
  const handleClose = () => {
    onClose && onClose()
    tag.current.style.display = 'none'
  }
  // 是否显示标签
  if (!visible) {
    return null
  }

  return <div className={wrapCls} style={{ ...style, backgroundColor: color, ...colorCls }} ref={tag}>
    {
      children
    }
    {
      closable && <span className={`${prefixCls}-btn_close`} onClick={handleClose}>x</span>
    }
  </div>
}

Tag.displayName = 'Tag'

Tag.defaultProps = {
  color: '',
  visible: true,
  closable: false,
  style: {},
  className: ''
}

Tag.propTypes = {
  // 关闭标签的回调事件
  onClose: PropTypes.func,
  // 颜色显示
  color: PropTypes.string,
  // 是否显示
  visible: PropTypes.bool,
  // 是否关闭
  closable: PropTypes.bool,
  // 类名
  className: PropTypes.string,
  // 样式
  style: PropTypes.object,
  // 子元素
  children: PropTypes.oneOf([
    PropTypes.string
  ])
}

export default Tag
