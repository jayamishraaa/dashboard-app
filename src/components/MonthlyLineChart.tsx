import { LineChart } from "@mui/x-charts";
import userDashboardData from "../data";

// Define types for the data structure
interface Purchase {
  dateOfPurchase: string;
  price: number;
}

interface User {
  purchases: {
    electronics: Purchase[];
    clothing: Purchase[];
    groceries: Purchase[];
  };
}

type DashboardData = User[]; // Array of users

// Function to aggregate sales data by month
function aggregateSalesByMonth(data: DashboardData): number[] {
  const salesByMonth = Array(12).fill(0); // Array to store monthly sales

  data.forEach(user => {
    // Define the categories explicitly as string literals
    const categories: ('electronics' | 'clothing' | 'groceries')[] = ['electronics', 'clothing', 'groceries'];
    
    categories.forEach(category => {
      user.purchases[category].forEach(purchase => {
        const month = new Date(purchase.dateOfPurchase).getMonth(); // Get the month (0-11)
        salesByMonth[month] += purchase.price; // Add the purchase price to the correct month
      });
    });
  });

  return salesByMonth;
}

export default function MonthlyLineChart() {
  const salesData = aggregateSalesByMonth(userDashboardData); // Aggregate sales data by month

  return (
    <LineChart
      xAxis={[ // Correctly structured xAxis
        {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] // Month labels for the x-axis
        }
      ]}
      series={[
        {
          data: salesData, // Monthly sales data
          showMark: (point) => point.index % 2 === 0, // Show marks for even months
        },
      ]}
      width={500}
      height={300}
    />
  );
}
