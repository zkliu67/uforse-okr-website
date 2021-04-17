import React from 'react';
import './index.css';

export default function OKRItem({dataSource}){
  const { 
    target, 
    department, 
    startDate,
    endDate,
    Assignee,
    score,
    krs = []
  } = dataSource;
  return (
    <div>
      <div className='okr-item-header'>
        <div className='okr-item-object'>
          <div className='bold'>
            {target}
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