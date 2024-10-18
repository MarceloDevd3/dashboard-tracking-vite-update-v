import { useState } from 'react';
import MiniCards from './components/cardItem';
import data from './data';
import './App.css'
import profile from './assets/img/image-jeremy.png';

function App() {

  const [currentDash, setCurrentDash] = useState('daily');

  const dailyBtn = () => {
    setCurrentDash('daily');
  }

  const weeklyBtn = () => {
    setCurrentDash('weekly')
  }

  const monthlyBtn = () => {
    setCurrentDash('monthly')
  }

  const btn = document.querySelectorAll('.btn-card-controll');

  var activeItem = function(manual) {
     btn.forEach(btnItem => {
      btnItem.classList.remove('active')
     })
     btn[manual].classList.add('active')
  }

  btn.forEach((item, i) => {
    item.addEventListener('click', () => {
      activeItem(i)
    })
  })


  const Cards = data.map(item => {
    return (
       currentDash === 'daily' ?  <MiniCards title={item.title} tipo={item.timeframes.daily.current} class={item.class} info={'daily'} subtipo={item.timeframes.daily.previous} img={item.img}  /> : currentDash === 'weekly' ?  <MiniCards title={item.title} tipo={item.timeframes.weekly.current} subtipo={item.timeframes.weekly.previous} class={item.class} img={item.img} info={'Last  Weekly'}  /> : currentDash === 'monthly' ?  <MiniCards title={item.title} tipo={item.timeframes.monthly.current} subtipo={item.timeframes.monthly.previous} img={item.img} class={item.class} info={' Last Monthly'} /> : 'none'
    )
  })



  return (
    <main role='main'>
    <section id='controll-card' aria-labelledby='controle profile zone'>
      <div id='blue-top'>
        <div id='img-container'>
        <img src={profile} alt='profile ilustration man' />
        </div>
        <h1>Report for <br id='mobile'/> <span id='username'>Jeremy <br id='desk'/>  Robson</span> </h1>
      </div>
    <div className='btn-line' aria-labelledby='controle bar'>
       <button className='btn-card-controll active' aria-label="daily option"  onClick={dailyBtn}>Daily</button>
       <button className='btn-card-controll' aria-label="weekly option"  onClick={weeklyBtn}>Weekly</button>
       <button className='btn-card-controll' aria-label="monthly option"  onClick={monthlyBtn}>Monthly</button>
      </div>
    </section>
    {Cards}
    </main>
  )
}

export default App
