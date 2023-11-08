// Bài 5: Đếm xem trong array có tổng cộng bao nhiêu số 20
let array1 = [5, 10, 15, 20, 25, 50, 20];
let total = 0;

for (i = array1; i < 25; i +=5){
    if(i - 20 == 0){
        
        total = i;
    }
}
console.log(total); // Output: 2