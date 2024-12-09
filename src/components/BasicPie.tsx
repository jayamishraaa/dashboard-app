import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import userDashboardData from '../data'; // Import your user data

// Define types for Product, Purchases, RecentActivity, Category, and User
interface Product {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

interface Purchases {
  electronics: Product[];
  clothing: Product[];
  groceries: Product[];
}

interface RecentActivity {
  date: string;
  action: string;
  type: string;
}

interface Category {
  category: string;
  products: string[];
}

interface User {
  id: number;
  username: string;
  email: string;
  gender: string;
  totalOrders: number;
  totalRevenue: number;
  lastLogin: string;
  activeStatus: boolean;
  notifications: number;
  purchases: Purchases;
  recentActivity: RecentActivity[];
  categories: Category[];
}

interface CategoryData {
  label: string;
  value: number;
}

// Function to calculate category data from userDashboardData
const calculateCategoryData = (data: User[]): CategoryData[] => {
  const categoryData: Record<string, number> = data.reduce((acc: Record<string, number>, user) => {
    Object.keys(user.purchases).forEach((category) => {
      const totalQuantity = user.purchases[category as keyof Purchases].reduce(
        (sum, product) => sum + product.quantity,
        0
      );
      acc[category] = acc[category] ? acc[category] + totalQuantity : totalQuantity;
    });
    return acc;
  }, {});

  return Object.keys(categoryData).map((category) => ({
    label: category,
    value: categoryData[category],
  }));
};

// Function to calculate gender data from userDashboardData
const calculateGenderData = (data: User[]): CategoryData[] => {
  const genderData: Record<string, number> = data.reduce((acc: Record<string, number>, user) => {
    const gender = user.gender;
    acc[gender] = acc[gender] ? acc[gender] + 1 : 1;
    return acc;
  }, {});

  return Object.keys(genderData).map((gender) => ({
    label: gender,
    value: genderData[gender],
  }));
};

// Reusable PieChart component
interface ReusablePieChartProps {
  data: CategoryData[];
  width: number;
  height: number;
}

const ReusablePieChart: React.FC<ReusablePieChartProps> = ({ data, width, height }) => {
  return (
    <PieChart
      series={[
        {
          data: data.map((data, index) => ({
            id: index,
            value: data.value,
            label: data.label,
          })),
        },
      ]}
      width={width}
      height={height}
    />
  );
};

// Main Pie Chart Component
const BasicPie = () => {
  // Get category and gender data
  const categoryData = calculateCategoryData(userDashboardData);
  const genderData = calculateGenderData(userDashboardData);

  return (
    <div className=''>
      <div className='flex mb-2 p-2 gap-2 flex-col justify-center items-center border shadow-gray-300 rounded shadow-md'>
        <h4>Category</h4>
        <ReusablePieChart data={categoryData} width={300} height={100} />
      </div>

      <div className='flex p-2 mb-2 gap-2 flex-col justify-center items-center border shadow-gray-300 shadow-md rounded'>
        <h4>Gender</h4>
        <ReusablePieChart data={genderData} width={300} height={100} />
      </div>
    </div>
  );
};

export default BasicPie;
