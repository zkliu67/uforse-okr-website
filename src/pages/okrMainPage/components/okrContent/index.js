import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const renderOKRItems = (items) => {
  return items.map((item, index) => {
    const { object, department, weight } = item
    return (
      <div key={`okr-item-${index}`} className='okr-item-wrapper'>
        <table>
          <tr>
            <th>#</th>
            <th>object</th>
            <th>department</th>
            <th>weight</th>
          </tr>
          <tr>
            <td>{index}</td>
            <td>{object}</td>
            <td>{department}</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td colSpan='3'>Alibaba</td>
            <td>Hangzhou</td>
          </tr>
        </table>
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