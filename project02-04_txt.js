/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Levi Boardman
      Date:   3/31/2025

      Filename: project02-04.js
 */
      const CHICKEN_PRICE = 10.95;
      const HALIBUT_PRICE = 13.95;
      const BURGER_PRICE = 9.95;
      const SALMON_PRICE = 18.95;
      const SALAD_PRICE = 7.95;
      const SALES_TAX = 0.07;
      
      // Function to calculate total cost and update the webpage
      function calcTotal() {
          let cost = 0; // Initial cost
      
          // Variables for checked state of menu items
          const buyChicken = document.getElementById("chicken").checked;
          const buyHalibut = document.getElementById("halibut").checked;
          const buyBurger = document.getElementById("burger").checked;
          const buySalmon = document.getElementById("salmon").checked;
          const buySalad = document.getElementById("salad").checked;
      
          // Calculate cost based on selected items
          cost += buyChicken ? CHICKEN_PRICE : 0;
          cost += buyHalibut ? HALIBUT_PRICE : 0;
          cost += buyBurger ? BURGER_PRICE : 0;
          cost += buySalmon ? SALMON_PRICE : 0;
          cost += buySalad ? SALAD_PRICE : 0;
      
          // Update cost display
          document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
      
          // Calculate and update tax display
          const tax = cost * SALES_TAX;
          document.getElementById("foodTax").innerHTML = formatCurrency(tax);
      
          // Calculate and update total bill display
          const totalCost = cost + tax;
          document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
      }
      
      // Event handlers for menu item changes
      document.getElementById("chicken").addEventListener("click", calcTotal);
      document.getElementById("halibut").addEventListener("click", calcTotal);
      document.getElementById("burger").addEventListener("click", calcTotal);
      document.getElementById("salmon").addEventListener("click", calcTotal);
      document.getElementById("salad").addEventListener("click", calcTotal);



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
