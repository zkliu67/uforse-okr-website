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
export default function OKRContent({dataSource}) {
  return (
    <div>
      {renderOKRItems(dataSource)}
    </div>
  )
}