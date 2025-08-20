const salesData = [
  { product: 'Phone', cost: '500', region: 'North' },
  { product: 'Tablet', cost: '350', region: 'South' },
  { product: 'Laptop', cost: '1500', region: 'North' },
  { product: 'Headphones', cost: '120', region: 'East' },
  { product: 'Mouse', cost: '30', region: 'North' },
  { product: 'Keyboard', cost: '80', region: 'East' },
  { product: 'Monitor', cost: '250', region: 'South' },
  { product: 'Webcam', cost: '60', region: 'North' },
];

const targetRegion = 'North';

const totalSalesInRegion = salesData
  .filter(item => item.region === targetRegion)
  .map(item => Number(item.cost))
  .reduce((total, cost) => total + cost, 0);

console.log(`Calculating total sales for the '${targetRegion}' region...`);
console.log(`Sales data converted and processed.`);
console.log(`The total sales in the '${targetRegion}' region are $${totalSalesInRegion}.`);
