import React from 'react';
import OkrModal from '../okrModal';
import './index.css';

export default class OKRItem extends React.Component {

  render() {
    const { 
      dataSource: {
        id,
        target, 
        department, 
        startDate,
        endDate,
        Assignee,
        score,
        krs = []  
      },
      onModalDisplay
    } = this.props;
    return (
      <div>
        <div className='okr-item-header'>
          <div className='okr-item-object'>
            <div className='bold'>
              {target} <span onClick={() => onModalDisplay(id)}>[编辑]</span>
            </div>
            <div className='okr-item-object-detail'>
            <div>目标类型：{department}</div>
              <div>周期：{startDate} - {endDate}</div>
            </div>  
          </div>
          <div className='okr-item-info'>
            <div className='light'>
              负责人
            </div>
            <div className='light'>
              {Assignee}
            </div>
          </div>
          <div className='okr-item-info'>
            <div className='light'>
              评分
            </div>
            <div className='light'>
              {score}%
            </div>
          </div>
        </div>
        <div className='okr-key-results'>
          {
            krs.map((krDetail, index) => {
              const { kr, weight } = krDetail;
              return (
                <div className='okr-kr-content' key={`okr-kr-item${index}`}>
                  <span>{index+1}</span>
                    {kr}
                  <span>| weight {weight}%</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}