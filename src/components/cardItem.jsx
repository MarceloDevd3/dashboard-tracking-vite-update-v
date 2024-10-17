import React from 'react';
import ellipsisIcon from '../assets/img/icon-ellipsis.svg';

export default function ControlCard(props) {

  return (

    <article className='mini-card'>
      <div className='mini-card-bg'>
      <img src={props.img} alt={'icon ' + props.title} />
      </div>
      <div className='mini-card-info'>
        <div className='row'>
          <h3 className='row-title'>{props.title}</h3>
          <div className='block-img'>
              <img src={ellipsisIcon} alt='bubble'/>
          </div>
        </div>
        <div className='row'>
           <h3 className='hours'>{props.tipo}hrs</h3>
           <h4 className='hours-complement-info'>{props.info}  -{props.subtipo}hrs</h4>
          </div>
      </div>
    </article>
  )
} 

