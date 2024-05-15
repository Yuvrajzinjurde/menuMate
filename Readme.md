- `order_Schema` = {
  tableNumber
  items: [
  {
  itemId - required
  quantity - required
  price - required
  averageCookingTime -required
  }
  ],
  averageTimeNeeded - no neeed to send
  createdAt - no neeed to send
  totalPrice - no neeed to send
  isPaid - optional
  }

// handled in backend

- `order_status` = {
  orderId  
  isActive
  preparingStaff
  isAssigned
  };

- `menuItemSchema` = {
  name
  description
  price
  picture
  recipe
  }
