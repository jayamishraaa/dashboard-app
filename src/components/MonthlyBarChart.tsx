import { BarChart } from '@mui/x-charts/BarChart';
import {userDashboardData} from '../data';  // Assuming this is where your data is stored

const getMonthFromDate = (date: string) => {
  const month = new Date(date).getMonth();  // Get month index (0-11)
  return month;
};

const aggregatePurchases = () => {
  const monthlyData: Record<string, Record<number, number>> = {}; // { category: { month: totalProducts } }

  userDashboardData.forEach((user) => {
    Object.keys(user.purchases).forEach((category) => {
      const products = user.purchases[category as keyof typeof user.purchases];
      
      products.forEach((product) => {
        const month = getMonthFromDate(product.dateOfPurchase); // Extract month from product date
        const totalQuantity = product.quantity;

        if (!monthlyData[category]) {
          monthlyData[category] = {};
        }
        
        if (!monthlyData[category][month]) {
          monthlyData[category][month] = 0;
        }

        monthlyData[category][month] += totalQuantity; // Accumulate the quantity for the specific month
      });
    });
  });

  return monthlyData;
};

// Prepare data for the chart
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Aggregate the data
const monthlyData = aggregatePurchases();

// Get the unique categories from the data
const categoryNames = Object.keys(monthlyData);

// For each category, create an array of values for each month
const chartData = categoryNames.map((category) => {
  return {
    label: category.charAt(0).toUpperCase() + category.slice(1),  // Capitalize the category name for display
    data: months.map((_, monthIndex) => monthlyData[category]?.[monthIndex] || 0), // Default to 0 if no data for the month
  };
});

export default function MonthlyBarChart() {
  return (
    <div className='card-component flex flex-col justify-center items-center shadow-md mb-2'>
      <h2 className='justify-self-center fs-xl p-2'>Montly Bar Chart</h2>
      <BarChart
        xAxis={[{ scaleType: 'band', data: months }]}
        yAxis={[{ scaleType: 'linear' }]}
        series={chartData.map((categoryData) => ({
          data: categoryData.data,
          label: categoryData.label,
        }))}
        width={900}
        height={300}
      />
    </div>

  );
}
