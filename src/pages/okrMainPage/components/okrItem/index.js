import React from 'react';
import './index.css';

export default function OKRItem({dataSource}){
  const { object, department, weight } = dataSource;
  return (
    <div>
      <div className='okr-item-header'>
        <div className='okr-item-object'>
          <div className='bold'>
            提高页面响应速度和用户体验
          </div>
          <div className='okr-item-object-detail'>
            <div>目标类型：研发部</div>
            <div>周期：2021.01.30 - 2021.04.30</div>
          </div>  
        </div>
        <div className='okr-item-info'>
          <div className='light'>
            负责人
          </div>
          <div className='light'>
            Sherry
          </div>
        </div>
        <div className='okr-item-info'>
          <div className='light'>
            评分
          </div>
          <div className='light'>
            50%
          </div>
        </div>
      </div>
      <div className='okr-key-results'>
        <div className='okr-kr-content'>
          <span>1</span>
          提高页面访问效率，访问速度达到100ms以内
          <span>| weight 50%</span>
        </div>
        <div className='okr-kr-content'>
          <span>1</span>
          提高页面访问效率，访问速度达到100ms以内
        </div>
        <div className='okr-kr-content'>
          <span>1</span>
          提高页面访问效率，访问速度达到100ms以内
        </div>
      </div>
    </div>
  )

}