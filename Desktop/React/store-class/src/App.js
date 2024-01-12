import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}


class ShopItemClass extends Component{
  render() {
    return (
      <div class="main-content">
        <h2>Tiger of Sweden</h2>
         <h1>Leonard coat</h1>
         <h3>Minimalistic coat in cotton-blend</h3>
         <div class="description">
          Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
         </div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div class="divider"></div>
         <div class="purchase-info">
          <div class="price">£399.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  )
}

export default App;
