// 1. Sarah has 25 psc apples. Also he buy 15 psc apples. how many psc apples he has?

let haveApple = 25;

let buyApple = 15;

let totalApple = haveApple + buyApple;

console.log('Q 1. Ans:-' + ' ' + totalApple);

// 2. John had 500 taka. he spent 200 taka. How much taka does it have now??

let hadTaka = 500;

let spentTaka = 200;

let nowHave = hadTaka - spentTaka;

console.log('Q 2. Ans:-' + ' ' + 'John Now Have' + ' ' + nowHave + ' ' + 'Taka.');


// 3. A factory produces 120 machines per hour. How many machines will the factory make in 8 hours?

let singleHourProduce = 120;

let eightHourProduce = singleHourProduce * 8;

console.log('Q 3. Ans:-' + ' ' + eightHourProduce + ' ' + 'machines will produce in 8 Hours.');



// 4. A garden has 12 trees in each row and a total of 8 rows. The gardener owns 20 more trees. Planning to install. How many trees will be in the garden altogether?

let rowNumber = 8;

let eachRowTree = 12;

let eightRowTree = rowNumber * eachRowTree;

let newAdd = 20;

let nowTotalTree = eightRowTree + newAdd;

console.log('Q 4. Ans:-' + ' ' + 'Total Tree will be' + ' ' + nowTotalTree);


// 5. Rahim has 5 boxes, each box contains 10 oranges. He gave 12 oranges to his friend. How many oranges does Rahim have now?

let boxNumber = 5;

let eachBoxOrange = 10;

let totalOrange = boxNumber * eachBoxOrange;

let give = 12;

let nowHaveOrange = totalOrange - give;

console.log('Q 5. Ans:-' + ' ' + 'Now Have' + ' ' + nowHaveOrange + ' ' + 'Orange of Rahim');



// 6. A train takes 3 hours to cover a distance of 150 km. How many kilometers does the train cover per hour?

let threeHourseCover = 150;

let eachEveryHoure = threeHourseCover / 3;

console.log('Q 6. Ans:-' + ' ' + 'Every 1 Hour Cover' + ' ' + eachEveryHoure + 'KM')

// 7. A factory produces 200 products per day using 6 machines. Adding 2 more machines, What will be the total production, and if 3 products are not sold, how much is the remaining product?

let machinesQty = 6;

let machineProduce = 200;

let everyMachineProduce = machineProduce / machinesQty;

let addMachine = 2;

let totalMachine = machinesQty + addMachine;

let totalProduct = everyMachineProduce * totalMachine;

let unsoldProduct = 3;

let remainProduct = totalProduct - unsoldProduct;

console.log('Q 7. Ans:-' + ' ' + 'Remain Product is' + ' ' + remainProduct);


// 8. A shopkeeper buys 120 chocolates and puts 9 in each packet. How many chocolates will the shopkeeper have left after filling all the packets?

let buyChocolate = 120;

let eachPacket = 9;

let haveRemain = buyChocolate % eachPacket;

console.log('Q 8. Ans:-' + ' ' + 'shopkeeper have left' + haveRemain)