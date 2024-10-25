import React from 'react';
import './styles/Basket.css';

function calculatePlainBagelsOffer(quantity) {
  const specialOfferCount = Math.floor(quantity / 4);
  const regularCount = quantity % 4;
  const specialOfferPrice = specialOfferCount * 6;
  const regularPrice = regularCount * 2;
  return specialOfferPrice + regularPrice;
}

function calculateBagelCoffeeOffer(sesameBagels, largeCoffees) {
  const specialOfferComboCount = Math.min(sesameBagels, largeCoffees);
  const remainingSesameBagels = sesameBagels - specialOfferComboCount;
  const remainingLargeCoffees = largeCoffees - specialOfferComboCount;
  const specialOfferComboPrice = specialOfferComboCount * 3;
  const remainingSesameBagelPrice = remainingSesameBagels * 2.5;
  const remainingLargeCoffeePrice = remainingLargeCoffees * 2.5;
  return specialOfferComboPrice + remainingSesameBagelPrice + remainingLargeCoffeePrice;
}

function BasketPage({ basket, setBasket }) {
  // Group items by name and calculate quantities and total prices
  const groupedItems = basket.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name);
    const price = parseFloat(item.price.replace('$', ''));
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: price });
    }
    return acc;
  }, []);

  // Calculate the total sum of the items in the basket
  const totalSum = basket.reduce((sum, item) => {
    // Check for the special offers
    if (item.name === 'Plain Bagel' || item.name === 'Sesame Bagel' || item.name === 'Coffee - Large') {
      return sum; // Skip adding the price here, we'll handle it separately
    } else {
      // Remove the dollar sign and convert the price to a number
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price;
    }
  }, 0);

  // Calculate the special offer for plain bagels
  const plainBagels = groupedItems.find(item => item.name === 'Plain Bagel');
  const totalPlainBagelPrice = plainBagels ? calculatePlainBagelsOffer(plainBagels.quantity) : 0;

  // Calculate the special offer for sesame bagel and large coffee
  const sesameBagels = groupedItems.find(item => item.name === 'Sesame Bagel');
  const largeCoffees = groupedItems.find(item => item.name === 'Coffee - Large');
  const totalComboPrice = calculateBagelCoffeeOffer(
    sesameBagels ? sesameBagels.quantity : 0,
    largeCoffees ? largeCoffees.quantity : 0
  );

  // Add the special offer prices to the total sum
  const finalTotalSum = totalSum + totalPlainBagelPrice + totalComboPrice;

  // Track if any special offers were applied and which offers
  let specialOfferApplied = false;
  const appliedOffers = [];

  // Update the total price for each grouped item to reflect special offers
  groupedItems.forEach(item => {
    if (item.name === 'Plain Bagel') {
      item.totalPrice = calculatePlainBagelsOffer(item.quantity);
      if (item.quantity >= 4) {
        specialOfferApplied = true;
        appliedOffers.push('4 Plain Bagels for $6');
      }
    } else if (item.name === 'Sesame Bagel' || item.name === 'Coffee - Large') {
      item.totalPrice = 0; // Reset to 0, will be handled by combo offer
    }
  });

  if (sesameBagels && largeCoffees) {
    const comboPrice = calculateBagelCoffeeOffer(sesameBagels.quantity, largeCoffees.quantity);
    if (comboPrice < (sesameBagels.quantity * 2.5 + largeCoffees.quantity * 2.5)) {
      specialOfferApplied = true;
      appliedOffers.push('1 Sesame Bagel + 1 Coffee Large for $3');
    }
    sesameBagels.totalPrice += comboPrice;
    largeCoffees.totalPrice += comboPrice;
  }

  // Function to delete item
  const deleteItem = (itemName) => {
    const updatedBasket = basket.filter(item => item.name !== itemName);
    setBasket(updatedBasket);
  };

  return (
    <div className="basket-container">
      <h2>Our Basket</h2>
      <table className="basket-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groupedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.totalPrice.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => deleteItem(item.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-sum">
        <h3>Total: ${finalTotalSum.toFixed(2)}</h3>
      </div>
      {specialOfferApplied && (
        <>
          <h3>Special offer applied</h3>
          <ul className="special-offers">
            {appliedOffers.map((offer, index) => (
              <li key={index}>
                <h5>{offer}</h5>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BasketPage;