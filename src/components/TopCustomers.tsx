import React from "react";
import {userDashboardData} from "../data";

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
    .slice(0, 7); // Get the top 5

  return (
    <div className="card-component">
  <h2 className="p-3">Top Customers</h2>
  <div className="overflow-x-auto">
    <table className="w-full table-auto border-collapse border border-gray-200 rounded-lg">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="py-3 px-4 text-left border-b border-gray-300">Rank</th>
          <th className="py-3 px-4 text-left border-b border-gray-300">Username</th>
          <th className="py-3 px-4 text-left border-b border-gray-300">Email</th>
          <th className="py-3 px-4 text-left border-b border-gray-300">Gender</th>
          <th className="py-3 px-4 text-left border-b border-gray-300">Total Purchase ($)</th>
        </tr>
      </thead>
      <tbody>
        {topCustomers.map((customer, index) => (
          <tr
            key={customer.id}
            className={`text-gray-800 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <td className="py-3 px-4 border-b border-gray-200">{index + 1}</td>
            <td className="py-3 px-4 border-b border-gray-200 font-medium">
              {customer.username}
            </td>
            <td className="py-3 px-4 border-b border-gray-200">{customer.email}</td>
            <td className="py-3 px-4 border-b border-gray-200">{customer.gender}</td>
            <td className="py-3 px-4 border-b border-gray-200">
              ${customer.totalRevenue.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default TopCustomers;
