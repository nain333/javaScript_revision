const student={
    name:'anyName',
    age:10,
    hobby:'Singing',
    333:'threeHundredThrityThree',
    showStudent: function(){
        console.log(this)

    }
    // key:value


}
console.log(student.name)
student.showStudent()
console.log(student[333])
// working with objects
//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    const studentMarks = {
        John: [85, 90, 92, 88, 87],
        Jane: [92, 95, 89, 91, 94],
        David: [78, 85, 90, 92, 84],
        Emily: [90, 88, 92, 87, 91],
        Michael: [86, 92, 90, 89, 94]
    };
    
    function findAverage(marks) {
        let sum = 0;
        let subjects = 0;
    
        for (score of marks) {
            sum += score;
            subjects += 1;
        }
    
        let average = parseFloat(sum / subjects);
        return average;
    }
    
    function findClassTopper(studentMarks) {
        let topStudent = '';
        let maxAvg = -Infinity;
    
        for (let student in studentMarks) {
            let marks = studentMarks[student];
            let avg = findAverage(marks);
    
            if (avg > maxAvg) {
                maxAvg = avg;
                topStudent = student;
            }
        }
    
        return topStudent;
    }
    
    console.log(findClassTopper(studentMarks)); // Output: "Jane"

    //complete the calculatePrice function

    function calculatePrice(goods) {
        // Implement your function here
        let totalPrice = 0;
        
        for (let product in goods) {
            // Access the value associated with the property using goods[product]
            totalPrice += goods[product].price * goods[product].quantity;
        }
        
        return totalPrice;
    }
    
    const goods = {
        product1: { price: 100, quantity: 3 },
        product2: { price: 50, quantity: 2 },
        product3: { price: 200, quantity: 1 }
    };
    
    console.log(calculatePrice(goods)); // Output: 650
    
    //Complete the URLconstructor function 
// Do not change the starter code. 

function URLconstructor(queryParameters, domain, path) {
    // Initialize an empty array to store query parameter strings
    const queryParams = [];

    // Loop through the queryParameters object and build the query parameter strings
    for (const key in queryParameters) {
        if (queryParameters.hasOwnProperty(key)) {
            queryParams.push(`${key}=${queryParameters[key]}`);
        }
    }

    // Combine the domain, path, and query parameters into the URL string
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const url = `https://${domain}${path}${queryString}`;

    return url;
}

const queryParameters = { name: 'John', age: '28' };
const domain = "google.com";
const path = '/search';

console.log(URLconstructor(queryParameters, domain, path));
// Output: https://google.com/search?name=John&age=28
