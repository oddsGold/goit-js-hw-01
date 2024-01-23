let getShippingMessage = (country, price, deliveryFee) => {
  if (!isNaN(Number(price)) && !isNaN(Number(deliveryFee))) {
    const totalPrice = Number(price) + Number(deliveryFee);
    return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  return "Error";
};

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
console.log(getShippingMessage("Australia", "100", "100"));
console.log(getShippingMessage("Australia", "qwerty120", 10));
