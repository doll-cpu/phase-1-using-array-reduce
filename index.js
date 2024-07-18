const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here//
// Use reduce() to sum up all the values in batteryBatches
const totalBatteries = batteryBatches.reduce((sum, current) => sum + current, 0);

// You can log the result or use totalBatteries in further calculations
console.log(totalBatteries);
