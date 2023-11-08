// Bài 3: Cho sẵn một mảng  chứa các số tự nhiên. 
// Bình phương các phần tử trong mảng và lưu vào một mảng  mới.
let array1 = [1, 2, 3, 4, 5, 6, 7];

let array2 = array1.map(function(num) {
    return num * num;
  });

  // pow: power
for (let i = 0; i < array1.length; i++) {
  array2.push(Math.pow(array1[i],2));
}

console.log(array2); // Output: [1, 4, 9, 16, 25, 36, 49]