import React from 'react';
import OKRItem from '../okrItem';
import PropTypes from 'prop-types';
import './index.css';

const renderOKRItems = (items) => {
  return items.map((item, index) => {
    return (
      <div key={`okr-item-${index}`} className='okr-item-wrapper'>
        <OKRItem dataSource={item} />
      </div>
    )
  })
}
export default function OKRContent(props) {
  // const { items = [] } = props || {};
  const items = [
    {
      object: '可选择常用字和次常用字，或者选中“用户输入”然后自行输入要随机排列的汉字',
      department: ['技术部', '运营部'],
      weight: 0.5
    },
    {},
    {}
  ]
  return (
    <div>
      {renderOKRItems(items)}
    </div>
  )
}