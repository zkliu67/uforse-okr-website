import React from 'react';
import OKRItem from '../okrItem';
import './index.css';

const renderOKRItems = ({dataSource: items, ...props}) => {
  return items.map(item => {
    return (
      <div key={`okr-item-${item.id}`} className='okr-item-wrapper'>
        <OKRItem dataSource={item} {...props} />
      </div>
    )
  })
}
export default function OKRContent(props) {
  return (
    <div>
      {renderOKRItems({...props})}
    </div>
  )
}