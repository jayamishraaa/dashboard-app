const userDashboardData = [
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
  
export default userDashboardData