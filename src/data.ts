export const userDashboardData = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    totalOrders: 52,
    totalRevenue: 1200.50,
    lastLogin: '2024-12-08T14:32:00',
    activeStatus: true,
    notifications: 3,
    purchases: {
      electronics: [
        { productId: 101, productName: 'Smartphone', price: 499.99, quantity: 1, dateOfPurchase: '2024-01-10' },
        { productId: 102, productName: 'Laptop', price: 899.99, quantity: 1, dateOfPurchase: '2024-03-15' },
        { productId: 103, productName: 'Smartwatch', price: 199.99, quantity: 1, dateOfPurchase: '2024-05-20' },
        { productId: 104, productName: 'Bluetooth Headset', price: 50.00, quantity: 2, dateOfPurchase: '2024-07-08' },
        { productId: 105, productName: 'Tablet', price: 299.99, quantity: 1, dateOfPurchase: '2024-09-25' },
        { productId: 106, productName: 'TV', price: 799.99, quantity: 1, dateOfPurchase: '2024-11-11' },
      ],
      clothing: [
        { productId: 201, productName: 'T-shirt', price: 25.00, quantity: 3, dateOfPurchase: '2024-02-01' },
        { productId: 202, productName: 'Jeans', price: 40.00, quantity: 2, dateOfPurchase: '2024-04-05' },
        { productId: 203, productName: 'Jacket', price: 85.00, quantity: 1, dateOfPurchase: '2024-06-12' },
        { productId: 204, productName: 'Blouse', price: 35.00, quantity: 2, dateOfPurchase: '2024-08-15' },
        { productId: 205, productName: 'Sweater', price: 45.00, quantity: 2, dateOfPurchase: '2024-10-05' },
        { productId: 206, productName: 'Coat', price: 120.00, quantity: 1, dateOfPurchase: '2024-12-01' },
      ],
      groceries: [
        { productId: 301, productName: 'Apples', price: 3.50, quantity: 2, dateOfPurchase: '2024-01-02' },
        { productId: 302, productName: 'Milk', price: 1.99, quantity: 5, dateOfPurchase: '2024-02-18' },
        { productId: 303, productName: 'Bread', price: 1.20, quantity: 3, dateOfPurchase: '2024-04-07' },
        { productId: 304, productName: 'Tomatoes', price: 2.20, quantity: 5, dateOfPurchase: '2024-06-10' },
        { productId: 305, productName: 'Carrots', price: 1.70, quantity: 6, dateOfPurchase: '2024-08-20' },
        { productId: 306, productName: 'Potatoes', price: 3.00, quantity: 4, dateOfPurchase: '2024-11-02' },
      ],
    },
    recentActivity: [
      { date: '2024-12-07', action: 'Completed Order #44', type: 'order' },
      { date: '2024-12-06', action: 'Updated profile details', type: 'profile' },
      { date: '2024-12-05', action: 'Logged in from mobile', type: 'login' },
    ],
    categories: [
      { category: 'Electronics', products: ['Smartphone', 'Laptop', 'Smartwatch', 'Bluetooth Headset', 'Tablet', 'TV'] },
      { category: 'Clothing', products: ['T-shirt', 'Jeans', 'Jacket', 'Blouse', 'Sweater', 'Coat'] },
      { category: 'Groceries', products: ['Apples', 'Milk', 'Bread', 'Tomatoes', 'Carrots', 'Potatoes'] },
    ],
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    gender: 'Female',
    totalOrders: 31,
    totalRevenue: 800.75,
    lastLogin: '2024-12-07T09:12:00',
    activeStatus: false,
    notifications: 5,
    purchases: {
      electronics: [
        { productId: 103, productName: 'Headphones', price: 79.99, quantity: 1, dateOfPurchase: '2024-01-15' },
        { productId: 104, productName: 'Tablet', price: 299.99, quantity: 1, dateOfPurchase: '2024-03-12' },
        { productId: 105, productName: 'Smartwatch', price: 199.99, quantity: 1, dateOfPurchase: '2024-06-21' },
        { productId: 106, productName: 'Laptop', price: 799.99, quantity: 1, dateOfPurchase: '2024-09-14' },
        { productId: 107, productName: 'Bluetooth Speaker', price: 59.99, quantity: 2, dateOfPurchase: '2024-11-20' },
      ],
      clothing: [
        { productId: 203, productName: 'Dress', price: 60.00, quantity: 1, dateOfPurchase: '2024-02-25' },
        { productId: 204, productName: 'T-shirt', price: 25.00, quantity: 2, dateOfPurchase: '2024-04-11' },
        { productId: 205, productName: 'Jeans', price: 40.00, quantity: 3, dateOfPurchase: '2024-07-18' },
        { productId: 206, productName: 'Sweater', price: 45.00, quantity: 1, dateOfPurchase: '2024-09-30' },
      ],
      groceries: [
        { productId: 303, productName: 'Bananas', price: 2.99, quantity: 4, dateOfPurchase: '2024-01-05' },
        { productId: 304, productName: 'Bread', price: 1.50, quantity: 3, dateOfPurchase: '2024-02-12' },
        { productId: 305, productName: 'Oranges', price: 4.00, quantity: 5, dateOfPurchase: '2024-05-17' },
        { productId: 306, productName: 'Milk', price: 1.99, quantity: 7, dateOfPurchase: '2024-08-21' },
        { productId: 307, productName: 'Eggs', price: 2.50, quantity: 2, dateOfPurchase: '2024-11-05' },
      ],
    },
    recentActivity: [
      { date: '2024-12-06', action: 'Completed Order #22', type: 'order' },
      { date: '2024-12-05', action: 'Added a new shipping address', type: 'profile' },
      { date: '2024-12-04', action: 'Changed password', type: 'security' },
    ],
    categories: [
      { category: 'Electronics', products: ['Headphones', 'Tablet', 'Smartwatch', 'Laptop', 'Bluetooth Speaker'] },
      { category: 'Clothing', products: ['Dress', 'T-shirt', 'Jeans', 'Sweater'] },
      { category: 'Groceries', products: ['Bananas', 'Bread', 'Oranges', 'Milk', 'Eggs'] },
    ],
  },
  {
    id: 3,
    username: 'mike_jones',
    email: 'mike.jones@example.com',
    gender: 'Male',
    totalOrders: 120,
    totalRevenue: 3500.00,
    lastLogin: '2024-12-09T08:00:00',
    activeStatus: true,
    notifications: 0,
    purchases: {
      electronics: [
        { productId: 105, productName: 'Smartwatch', price: 199.99, quantity: 1, dateOfPurchase: '2024-01-18' },
        { productId: 106, productName: 'Gaming Console', price: 399.99, quantity: 1, dateOfPurchase: '2024-03-22' },
        { productId: 107, productName: 'Wireless Speaker', price: 150.00, quantity: 2, dateOfPurchase: '2024-05-15' },
        { productId: 108, productName: 'Projector', price: 400.00, quantity: 1, dateOfPurchase: '2024-07-03' },
        { productId: 109, productName: 'Smart TV', price: 600.00, quantity: 1, dateOfPurchase: '2024-09-18' },
        { productId: 110, productName: 'Digital Camera', price: 450.00, quantity: 1, dateOfPurchase: '2024-11-20' },
      ],
      clothing: [
        { productId: 204, productName: 'Jacket', price: 85.00, quantity: 1, dateOfPurchase: '2024-01-09' },
        { productId: 205, productName: 'Hoodie', price: 60.00, quantity: 2, dateOfPurchase: '2024-04-05' },
        { productId: 206, productName: 'Jeans', price: 55.00, quantity: 1, dateOfPurchase: '2024-06-18' },
        { productId: 207, productName: 'Sweater', price: 40.00, quantity: 1, dateOfPurchase: '2024-08-10' },
        { productId: 208, productName: 'Shirt', price: 30.00, quantity: 2, dateOfPurchase: '2024-10-15' },
        { productId: 209, productName: 'Pants', price: 45.00, quantity: 1, dateOfPurchase: '2024-12-03' },
      ],
      groceries: [
        { productId: 305, productName: 'Oranges', price: 4.00, quantity: 3, dateOfPurchase: '2024-01-12' },
        { productId: 306, productName: 'Milk', price: 1.50, quantity: 5, dateOfPurchase: '2024-02-14' },
        { productId: 307, productName: 'Apples', price: 3.00, quantity: 6, dateOfPurchase: '2024-04-25' },
        { productId: 308, productName: 'Eggs', price: 2.50, quantity: 4, dateOfPurchase: '2024-06-07' },
        { productId: 309, productName: 'Tomatoes', price: 2.80, quantity: 8, dateOfPurchase: '2024-08-18' },
        { productId: 310, productName: 'Carrots', price: 1.20, quantity: 6, dateOfPurchase: '2024-10-12' },
      ],
    },
    recentActivity: [
      { date: '2024-12-08', action: 'Completed Order #119', type: 'order' },
      { date: '2024-12-07', action: 'Reviewed product #35', type: 'review' },
      { date: '2024-12-06', action: 'Updated payment method', type: 'payment' },
      { date: '2024-12-05', action: 'Added a new shipping address', type: 'profile' },
      { date: '2024-12-04', action: 'Logged in from laptop', type: 'login' },
    ],
    categories: [
      { category: 'Electronics', products: ['Smartwatch', 'Gaming Console', 'Wireless Speaker', 'Projector', 'Smart TV', 'Digital Camera'] },
      { category: 'Clothing', products: ['Jacket', 'Hoodie', 'Jeans', 'Sweater', 'Shirt', 'Pants'] },
      { category: 'Groceries', products: ['Oranges', 'Milk', 'Apples', 'Eggs', 'Tomatoes', 'Carrots'] },
    ],
  },

  {
    id: 4,
    username: 'emily_wilson',
    email: 'emily.wilson@example.com',
    gender: 'Female',
    totalOrders: 15,
    totalRevenue: 450.20,
    lastLogin: '2024-12-09T10:00:00',
    activeStatus: true,
    notifications: 1,
    purchases: {
      electronics: [
        { productId: 107, productName: 'Bluetooth Speaker', price: 59.99, quantity: 2, dateOfPurchase: '2024-01-25' },
        { productId: 108, productName: 'Laptop Stand', price: 40.00, quantity: 1, dateOfPurchase: '2024-03-07' },
        { productId: 109, productName: 'Wireless Mouse', price: 25.00, quantity: 3, dateOfPurchase: '2024-05-15' },
        { productId: 110, productName: 'Smartphone Case', price: 20.00, quantity: 2, dateOfPurchase: '2024-07-18' },
        { productId: 111, productName: 'USB Drive', price: 15.00, quantity: 4, dateOfPurchase: '2024-09-22' },
        { productId: 112, productName: 'External Hard Drive', price: 100.00, quantity: 1, dateOfPurchase: '2024-11-04' },
      ],
      clothing: [
        { productId: 205, productName: 'Blouse', price: 35.00, quantity: 1, dateOfPurchase: '2024-02-09' },
        { productId: 206, productName: 'Skirt', price: 45.00, quantity: 2, dateOfPurchase: '2024-04-11' },
        { productId: 207, productName: 'Sunglasses', price: 30.00, quantity: 1, dateOfPurchase: '2024-06-14' },
        { productId: 208, productName: 'T-shirt', price: 25.00, quantity: 3, dateOfPurchase: '2024-08-05' },
        { productId: 209, productName: 'Leggings', price: 20.00, quantity: 1, dateOfPurchase: '2024-10-13' },
        { productId: 210, productName: 'Dress', price: 50.00, quantity: 2, dateOfPurchase: '2024-12-01' },
      ],
      groceries: [
        { productId: 306, productName: 'Tomatoes', price: 2.20, quantity: 5, dateOfPurchase: '2024-01-30' },
        { productId: 307, productName: 'Apples', price: 3.00, quantity: 4, dateOfPurchase: '2024-03-05' },
        { productId: 308, productName: 'Bread', price: 1.50, quantity: 6, dateOfPurchase: '2024-05-10' },
        { productId: 309, productName: 'Lettuce', price: 1.80, quantity: 3, dateOfPurchase: '2024-07-19' },
        { productId: 310, productName: 'Cucumber', price: 1.00, quantity: 8, dateOfPurchase: '2024-09-08' },
        { productId: 311, productName: 'Bananas', price: 2.00, quantity: 5, dateOfPurchase: '2024-11-18' },
      ],
    },
    recentActivity: [
      { date: '2024-12-09', action: 'Completed Order #14', type: 'order' },
      { date: '2024-12-08', action: 'Added a new payment method', type: 'payment' },
      { date: '2024-12-07', action: 'Changed account settings', type: 'profile' },
      { date: '2024-12-06', action: 'Reviewed product #112', type: 'review' },
      { date: '2024-12-05', action: 'Logged in from mobile', type: 'login' },
    ],
    categories: [
      { category: 'Electronics', products: ['Bluetooth Speaker', 'Laptop Stand', 'Wireless Mouse', 'Smartphone Case', 'USB Drive', 'External Hard Drive'] },
      { category: 'Clothing', products: ['Blouse', 'Skirt', 'Sunglasses', 'T-shirt', 'Leggings', 'Dress'] },
      { category: 'Groceries', products: ['Tomatoes', 'Apples', 'Bread', 'Lettuce', 'Cucumber', 'Bananas'] },
    ],
  },
  {
    id: 5,
    username: 'chris_lee',
    email: 'chris.lee@example.com',
    gender: 'Male',
    totalOrders: 74,
    totalRevenue: 2100.30,
    lastLogin: '2024-12-08T18:45:00',
    activeStatus: true,
    notifications: 2,
    purchases: {
      electronics: [
        { productId: 108, productName: 'Digital Camera', price: 499.99, quantity: 1, dateOfPurchase: '2024-01-15' },
        { productId: 109, productName: 'Wireless Charger', price: 30.00, quantity: 2, dateOfPurchase: '2024-03-10' },
        { productId: 110, productName: 'Bluetooth Headphones', price: 120.00, quantity: 1, dateOfPurchase: '2024-05-02' },
        { productId: 111, productName: 'Smartphone', price: 799.99, quantity: 1, dateOfPurchase: '2024-07-07' },
        { productId: 112, productName: 'Gaming Mouse', price: 50.00, quantity: 3, dateOfPurchase: '2024-09-19' },
        { productId: 113, productName: 'Laptop', price: 999.99, quantity: 1, dateOfPurchase: '2024-11-30' },
      ],
      clothing: [
        { productId: 206, productName: 'Sneakers', price: 70.00, quantity: 2, dateOfPurchase: '2024-02-20' },
        { productId: 207, productName: 'Jacket', price: 120.00, quantity: 1, dateOfPurchase: '2024-04-10' },
        { productId: 208, productName: 'T-shirt', price: 25.00, quantity: 3, dateOfPurchase: '2024-06-05' },
        { productId: 209, productName: 'Pants', price: 45.00, quantity: 2, dateOfPurchase: '2024-08-14' },
        { productId: 210, productName: 'Shirt', price: 35.00, quantity: 1, dateOfPurchase: '2024-10-05' },
        { productId: 211, productName: 'Sweater', price: 60.00, quantity: 1, dateOfPurchase: '2024-12-01' },
      ],
      groceries: [
        { productId: 307, productName: 'Lettuce', price: 1.99, quantity: 3, dateOfPurchase: '2024-01-23' },
        { productId: 308, productName: 'Eggs', price: 2.50, quantity: 2, dateOfPurchase: '2024-03-04' },
        { productId: 309, productName: 'Cucumber', price: 1.00, quantity: 4, dateOfPurchase: '2024-05-17' },
        { productId: 310, productName: 'Bananas', price: 1.79, quantity: 6, dateOfPurchase: '2024-07-20' },
        { productId: 311, productName: 'Tomatoes', price: 2.30, quantity: 5, dateOfPurchase: '2024-09-22' },
        { productId: 312, productName: 'Carrots', price: 1.50, quantity: 4, dateOfPurchase: '2024-11-03' },
      ],
    },
    recentActivity: [
      { date: '2024-12-07', action: 'Completed Order #70', type: 'order' },
      { date: '2024-12-06', action: 'Added a product to wishlist', type: 'wishlist' },
      { date: '2024-12-05', action: 'Updated profile picture', type: 'profile' },
      { date: '2024-12-04', action: 'Logged in from desktop', type: 'login' },
      { date: '2024-12-03', action: 'Changed email address', type: 'profile' },
    ],
    categories: [
      { category: 'Electronics', products: ['Digital Camera', 'Wireless Charger', 'Bluetooth Headphones', 'Smartphone', 'Gaming Mouse', 'Laptop'] },
      { category: 'Clothing', products: ['Sneakers', 'Jacket', 'T-shirt', 'Pants', 'Shirt', 'Sweater'] },
      { category: 'Groceries', products: ['Lettuce', 'Eggs', 'Cucumber', 'Bananas', 'Tomatoes', 'Carrots'] },
    ],
  },
  {
    id: 6,
    username: "alex_parker",
    email: "alex.parker@example.com",
    gender: "Male",
    totalOrders: 40,
    totalRevenue: 1250.45,
    lastLogin: "2024-12-09T12:00:00",
    activeStatus: true,
    notifications: 4,
    purchases: {
      electronics: [
        {
          productId: 114,
          productName: "Gaming Laptop",
          price: 1500.00,
          quantity: 1,
          dateOfPurchase: "2024-02-10"
        },
        {
          productId: 115,
          productName: "Wireless Earbuds",
          price: 120.00,
          quantity: 2,
          dateOfPurchase: "2024-05-12"
        }
      ],
      clothing: [
        {
          productId: 212,
          productName: "Winter Coat",
          price: 200.00,
          quantity: 1,
          dateOfPurchase: "2024-11-15"
        },
        {
          productId: 213,
          productName: "Running Shoes",
          price: 90.00,
          quantity: 1,
          dateOfPurchase: "2024-09-20"
        }
      ],
      groceries: [
        {
          productId: 313,
          productName: "Organic Spinach",
          price: 3.50,
          quantity: 4,
          dateOfPurchase: "2024-12-01"
        },
        {
          productId: 314,
          productName: "Almond Milk",
          price: 4.99,
          quantity: 3,
          dateOfPurchase: "2024-12-05"
        }
      ]
    },
    recentActivity: [
      {
        date: "2024-12-08",
        action: "Added a new payment method",
        type: "payment"
      },
      {
        date: "2024-12-07",
        action: "Reviewed product #115",
        type: "review"
      }
    ],
    categories: [
      {
        category: "Electronics",
        products: ["Gaming Laptop", "Wireless Earbuds"]
      },
      {
        category: "Clothing",
        products: ["Winter Coat", "Running Shoes"]
      },
      {
        category: "Groceries",
        products: ["Organic Spinach", "Almond Milk"]
      }
    ]
  },
  {
    id: 7,
    username: 'sarah_adams',
    email: 'sarah.adams@example.com',
    gender: 'Female',
    totalOrders: 39,
    totalRevenue: 1205.80,
    lastLogin: '2024-12-08T20:30:00',
    activeStatus: true,
    notifications: 4,
    purchases: {
      electronics: [
        { productId: 120, productName: 'Tablet', price: 299.99, quantity: 1, dateOfPurchase: '2024-02-15' },
        { productId: 121, productName: 'Noise-Cancelling Headphones', price: 150.00, quantity: 1, dateOfPurchase: '2024-04-10' },
        { productId: 122, productName: 'Smartphone', price: 799.99, quantity: 1, dateOfPurchase: '2024-06-25' },
        { productId: 123, productName: 'Laptop', price: 950.00, quantity: 1, dateOfPurchase: '2024-08-12' },
        { productId: 124, productName: 'Smartwatch', price: 200.00, quantity: 1, dateOfPurchase: '2024-10-15' },
      ],
      clothing: [
        { productId: 225, productName: 'Winter Coat', price: 120.00, quantity: 1, dateOfPurchase: '2024-01-20' },
        { productId: 226, productName: 'Jeans', price: 45.00, quantity: 2, dateOfPurchase: '2024-03-18' },
        { productId: 227, productName: 'Scarf', price: 25.00, quantity: 1, dateOfPurchase: '2024-05-05' },
        { productId: 228, productName: 'Blouse', price: 35.00, quantity: 3, dateOfPurchase: '2024-07-22' },
        { productId: 229, productName: 'Sweater', price: 60.00, quantity: 1, dateOfPurchase: '2024-09-10' },
      ],
      groceries: [
        { productId: 330, productName: 'Apples', price: 3.50, quantity: 4, dateOfPurchase: '2024-01-12' },
        { productId: 331, productName: 'Bananas', price: 2.50, quantity: 5, dateOfPurchase: '2024-03-22' },
        { productId: 332, productName: 'Milk', price: 1.99, quantity: 6, dateOfPurchase: '2024-05-15' },
        { productId: 333, productName: 'Lettuce', price: 1.80, quantity: 3, dateOfPurchase: '2024-07-05' },
        { productId: 334, productName: 'Carrots', price: 2.00, quantity: 5, dateOfPurchase: '2024-10-02' },
      ],
    },
    recentActivity: [
      { date: '2024-12-08', action: 'Completed Order #39', type: 'order' },
      { date: '2024-12-07', action: 'Updated profile picture', type: 'profile' },
      { date: '2024-12-06', action: 'Added a new shipping address', type: 'profile' },
      { date: '2024-12-05', action: 'Logged in from desktop', type: 'login' },
    ],
    categories: [
      { category: 'Electronics', products: ['Tablet', 'Noise-Cancelling Headphones', 'Smartphone', 'Laptop', 'Smartwatch'] },
      { category: 'Clothing', products: ['Winter Coat', 'Jeans', 'Scarf', 'Blouse', 'Sweater'] },
      { category: 'Groceries', products: ['Apples', 'Bananas', 'Milk', 'Lettuce', 'Carrots'] },
    ],
  },


];

export const employeeData = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Human Resource",
    age: 29,
    work_hours: 40,
    email: "alice.johnson@example.com",
    city: "New York",
    dob: "1994-05-15",
    job_title: "HR Manager"
  },
  {
    id: 2,
    name: "Robert Smith",
    department: "Development",
    age: 35,
    work_hours: 45,
    email: "robert.smith@example.com",
    city: "San Francisco",
    dob: "1988-07-22",
    job_title: "Senior Developer"
  },
  {
    id: 3,
    name: "Laura Martinez",
    department: "Design",
    age: 27,
    work_hours: 38,
    email: "laura.martinez@example.com",
    city: "Austin",
    dob: "1996-03-12",
    job_title: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Michael Brown",
    department: "Project Management",
    age: 40,
    work_hours: 50,
    email: "michael.brown@example.com",
    city: "Chicago",
    dob: "1983-10-02",
    job_title: "Project Manager"
  },
  {
    id: 5,
    name: "Emily Davis",
    department: "Development",
    age: 30,
    work_hours: 42,
    email: "emily.davis@example.com",
    city: "Seattle",
    dob: "1993-01-19",
    job_title: "Frontend Developer"
  },
  {
    id: 6,
    name: "David Wilson",
    department: "Design",
    age: 33,
    work_hours: 39,
    email: "david.wilson@example.com",
    city: "Los Angeles",
    dob: "1990-11-25",
    job_title: "Graphic Designer"
  },
  {
    id: 7,
    name: "Sophia Moore",
    department: "Human Resource",
    age: 31,
    work_hours: 40,
    email: "sophia.moore@example.com",
    city: "Denver",
    dob: "1992-08-14",
    job_title: "Recruitment Specialist"
  },
  {
    id: 8,
    name: "James Taylor",
    department: "Project Management",
    age: 36,
    work_hours: 48,
    email: "james.taylor@example.com",
    city: "Boston",
    dob: "1987-04-09",
    job_title: "Agile Coach"
  },
  {
    id: 9,
    name: "Olivia Anderson",
    department: "Development",
    age: 28,
    work_hours: 43,
    email: "olivia.anderson@example.com",
    city: "Miami",
    dob: "1995-02-17",
    job_title: "Backend Developer"
  },
  {
    id: 10,
    name: "William Garcia",
    department: "Design",
    age: 34,
    work_hours: 37,
    email: "william.garcia@example.com",
    city: "Dallas",
    dob: "1989-06-28",
    job_title: "Creative Director"
  },
  {
    id: 11,
    name: "Jack Williams",
    department: "Marketing",
    age: 32,
    work_hours: 40,
    email: "jack.williams@example.com",
    city: "Houston",
    dob: "1991-02-05",
    job_title: "Marketing Specialist"
  },
  {
    id: 12,
    name: "Ava Miller",
    department: "Sales",
    age: 27,
    work_hours: 45,
    email: "ava.miller@example.com",
    city: "Phoenix",
    dob: "1996-08-30",
    job_title: "Sales Manager"
  },
  {
    id: 13,
    name: "Lucas Harris",
    department: "Engineering",
    age: 38,
    work_hours: 50,
    email: "lucas.harris@example.com",
    city: "Orlando",
    dob: "1985-11-17",
    job_title: "DevOps Engineer"
  },
  {
    id: 14,
    name: "Grace Clark",
    department: "Customer Support",
    age: 29,
    work_hours: 38,
    email: "grace.clark@example.com",
    city: "Los Angeles",
    dob: "1994-04-06",
    job_title: "Support Specialist"
  },
  {
    id: 15,
    name: "Ethan Rodriguez",
    department: "Development",
    age: 33,
    work_hours: 46,
    email: "ethan.rodriguez@example.com",
    city: "San Diego",
    dob: "1990-09-25",
    job_title: "Full-stack Developer"
  },
  {
    id: 16,
    name: "Charlotte Walker",
    department: "HR",
    age: 40,
    work_hours: 40,
    email: "charlotte.walker@example.com",
    city: "New York",
    dob: "1983-02-18",
    job_title: "HR Director"
  },
  {
    id: 17,
    name: "Benjamin King",
    department: "Product",
    age: 30,
    work_hours: 42,
    email: "benjamin.king@example.com",
    city: "Atlanta",
    dob: "1993-12-03",
    job_title: "Product Manager"
  },
  {
    id: 18,
    name: "Mia Lee",
    department: "Finance",
    age: 34,
    work_hours: 44,
    email: "mia.lee@example.com",
    city: "Dallas",
    dob: "1989-05-17",
    job_title: "Financial Analyst"
  },
  {
    id: 19,
    name: "Daniel Scott",
    department: "Design",
    age: 25,
    work_hours: 39,
    email: "daniel.scott@example.com",
    city: "Chicago",
    dob: "1998-01-21",
    job_title: "UI/UX Designer"
  },
  {
    id: 20,
    name: "Amelia Lewis",
    department: "Sales",
    age: 28,
    work_hours: 40,
    email: "amelia.lewis@example.com",
    city: "San Francisco",
    dob: "1995-10-08",
    job_title: "Sales Executive"
  },
  {
    id: 21,
    name: "Henry Perez",
    department: "Marketing",
    age: 31,
    work_hours: 41,
    email: "henry.perez@example.com",
    city: "Austin",
    dob: "1992-07-10",
    job_title: "Marketing Manager"
  },
  {
    id: 22,
    name: "Lily Turner",
    department: "Engineering",
    age: 36,
    work_hours: 47,
    email: "lily.turner@example.com",
    city: "Boston",
    dob: "1987-03-16",
    job_title: "Software Engineer"
  },
  {
    id: 23,
    name: "Owen Harris",
    department: "Operations",
    age: 39,
    work_hours: 48,
    email: "owen.harris@example.com",
    city: "Miami",
    dob: "1984-06-04",
    job_title: "Operations Manager"
  },
  {
    id: 24,
    name: "Zoe Walker",
    department: "Research and Development",
    age: 29,
    work_hours: 44,
    email: "zoe.walker@example.com",
    city: "Denver",
    dob: "1994-02-13",
    job_title: "R&D Scientist"
  },
  {
    id: 25,
    name: "Leo Young",
    department: "Finance",
    age: 32,
    work_hours: 40,
    email: "leo.young@example.com",
    city: "Seattle",
    dob: "1991-08-29",
    job_title: "Accountant"
  },
  {
    id: 26,
    name: "Harper Collins",
    department: "Customer Support",
    age: 26,
    work_hours: 38,
    email: "harper.collins@example.com",
    city: "Austin",
    dob: "1997-05-12",
    job_title: "Customer Service Representative"
  },
  {
    id: 27,
    name: "Jackson Evans",
    department: "Development",
    age: 34,
    work_hours: 45,
    email: "jackson.evans@example.com",
    city: "Houston",
    dob: "1989-01-27",
    job_title: "Mobile Developer"
  },
  {
    id: 28,
    name: "Isabella King",
    department: "Product",
    age: 29,
    work_hours: 42,
    email: "isabella.king@example.com",
    city: "Chicago",
    dob: "1994-03-22",
    job_title: "Product Designer"
  },
  {
    id: 29,
    name: "Samuel Lee",
    department: "Marketing",
    age: 31,
    work_hours: 40,
    email: "samuel.lee@example.com",
    city: "Los Angeles",
    dob: "1992-10-01",
    job_title: "Marketing Analyst"
  },
  {
    id: 30,
    name: "Chloe Wilson",
    department: "Operations",
    age: 33,
    work_hours: 43,
    email: "chloe.wilson@example.com",
    city: "Dallas",
    dob: "1990-11-19",
    job_title: "Operations Coordinator"
  }
]
