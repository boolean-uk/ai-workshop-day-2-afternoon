import React from 'react';
import './styles/Menu.css';

function Menu({ addToBasket, basket }) {
  const items = [
    { name: 'Plain Bagel', price: '$2.00' },
    { name: 'Sesame Bagel', price: '$2.50' },
    { name: 'Everything Bagel', price: '$3.00' },
    { name: 'Coffee - Small', price: '$1.50' },
    { name: 'Coffee - Medium', price: '$2.00' },
    { name: 'Coffee - Large', price: '$2.50' },
    { name: 'Cream Cheese Filling', price: '$1.00' },
    { name: 'Lox Filling', price: '$2.50' },
    { name: 'Avocado Filling', price: '$2.00' },
  ];

  const specialOffers = [
    { name: '4 Plain Bagels', price: '$6.00' },
    { name: '1 Sesame Bagel + 1 Coffee - Large', price: '$3.00' },
  ];

  return (
    <section className="menu-container">
      <div className="tables-container">
        <h2>Our Menu</h2>
        <table className="menu-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => addToBasket(item)}>Add to Basket</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="special-offers-container">
          <h2>Our Special Offers</h2>
          <table className="special-offers-table">
            <thead>
              <tr>
                <th>Special Offer</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {specialOffers.map((offer, index) => (
                <tr key={index}>
                  <td>{offer.name}</td>
                  <td>{offer.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Menu;