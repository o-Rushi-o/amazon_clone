import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Checkout.css";

const Checkout= () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data for the current user
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Items Purchased</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>{order.totalAmount}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.name} - {item.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
