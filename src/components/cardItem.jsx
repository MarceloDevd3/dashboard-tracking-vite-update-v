import React from 'react';
import ellipsisIcon from '../assets/img/icon-ellipsis.svg';

export default function ControlCard(props) {

  return (
    <article className={props.class}>
      <div className={props.title + ' mini-card-bg'}>
      <img src={props.img} alt={'icon ' + props.title} className='im-item'  />
      </div>
      <div className='mini-card-info'>
        <div className='row'>
          <h2 className='row-title'>{props.title}</h2>
          <div className='block-img'>
              <img src={ellipsisIcon} alt='bubble' />
          </div>
        </div>
        <div className='row'>
           <h2 className='hours'>{props.tipo}hrs</h2>
           <h3 className='hours-complement-info'>{props.info}  -{props.subtipo}hrs</h3>
          </div>
      </div>
    </article>
  )
} 

