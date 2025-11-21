import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMyOrders } from '../api/orderApi';

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await getMyOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const ordersCount = orders.length;

  return (
    <OrdersContext.Provider value={{ orders, ordersCount, fetchOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
