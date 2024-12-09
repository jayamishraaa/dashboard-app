import React from "react";
import userDashboardData from "../data";

// Define the type for a customer based on the provided structure
interface Customer {
  id: number;
  username: string;
  email: string;
  gender: string;
  totalOrders: number;
  totalRevenue: number;  // Changed from 'revenue' to 'totalRevenue'
  lastLogin: string;
  activeStatus: boolean;
  notifications: number;
  purchases: {
    electronics: any[];
    clothing: any[];
    groceries: any[];
  };
  recentActivity: any[];
  categories: any[];
}

const TopCustomers: React.FC = () => {
  // Sort customers by totalRevenue in descending order and pick the top 5
  const topCustomers: Customer[] = [...userDashboardData]
    .sort((a, b) => b.totalRevenue - a.totalRevenue) // Sort by totalRevenue (descending)
    .slice(0, 5); // Get the top 5

  return (
    <div className="p-2 border shadow-gray-300 shadow-md rounded mb-2">
      <h2>Top 5 Customers</h2>
      <table >
        <thead >
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Total Purchase ($)</th>
          </tr>
        </thead>
        <tbody>
          {topCustomers.map((customer, index) => (
            <tr key={customer.id} >
              <td>{index + 1}</td>
              <td >{customer.username}</td>
              <td>{customer.email}</td>
              <td>{customer.gender}</td>
              <td>{customer.totalRevenue.toFixed(2)}</td>  {/* Displaying totalRevenue */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCustomers;
