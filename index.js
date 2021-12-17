const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {  //currentValue is the value of the current element its on
    return accumulator + currentValue;
},0);   // 0 is the value accumulator is initially set to

console.log(totalBatteries);

