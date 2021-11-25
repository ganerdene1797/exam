const string = 'apple, banana, kiwi';

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI' 

let upper = string.toUpperCase();
 
// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi' 

let arr = string.split(", ")
let result = arr.join("; ")
arr[0][0] = arr[0].charAt(0).toUpperCase(); 
arr[1][0] = arr[1].charAt(0).toUpperCase(); 
arr[2][0] = arr[2].charAt(0).toUpperCase();  

const array = ['d', 'e', 'c', 'a', 'b'];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ. 

array.sort();

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ. 

const middle = parseInt(array.length / 2); 
let array1 = [];
array1[0] = array[middle - 1];
array1[1] = array[middle];
array1[2] = array[middle + 1];
 

// 5. Өгсөн array - ын эхний элемэнтийг устага 

// -- Энд кодоо бичнэ үү!

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
