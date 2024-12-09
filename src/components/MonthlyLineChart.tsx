import { LineChart } from "@mui/x-charts";
import userDashboardData from "../data";

// Define types for the data structure
interface Purchase {
  dateOfPurchase: string;
  price: number;
  quantity: number,
}

interface User {
  purchases: {
    electronics: Purchase[];
    clothing: Purchase[];
    groceries: Purchase[];
  };
}

type DashboardData = User[]; // Array of users

// Function to aggregate sales data by month and calculate the increment
function aggregateSalesByMonth(data: DashboardData): number[] {
  const salesByMonth = Array(12).fill(0); // Initialize an array to store total sales for each month

  // Iterate over each user's purchase data
  data.forEach(user => {
    // Define the categories explicitly as string literals
    const categories: ('electronics' | 'clothing' | 'groceries')[] = ['electronics', 'clothing', 'groceries'];
    
    categories.forEach(category => {
      user.purchases[category].forEach(purchase => {
        const month = new Date(purchase.dateOfPurchase).getMonth(); // Get the month (0-11)
        salesByMonth[month] += purchase.price * purchase.quantity; // Add the purchase price to the correct month
      });
    });
  });

  // Calculate the increment in sales from one month to the next
  const salesIncrement = salesByMonth.map((sales, index) => {
    if (index === 0) return 0; // Assume 0 for the first month (or leave out)
    return sales - salesByMonth[index - 1]; // Difference between current month and previous month
  });

  return salesIncrement;
}

export default function MonthlyLineChart() {
  const salesData = aggregateSalesByMonth(userDashboardData); // Aggregate 
  console.log(salesData)
  return (
    <div className='border flex items-center mb-2 rounded p-2 shadow-gray-300 shadow-md'>
      <LineChart
        xAxis={[
          {
            // Provide the data for the months
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
          }
        ]}
        series={[
          {
            data: [0, -1200.92, 1385.02, -1235.37, 246.39, -262, 1010.1399999999999, -1154.6, 1652.95, -1762.28, 2290.76, -2177.96], // Monthly sales increment data
            showMark: true, // Show marks for even months
          },
        ]}
        width={500}
        height={300}
        
      />
    </div>
  );
}
