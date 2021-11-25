/*

// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.

for(let i=0; i<=100; i++) {
    console.log(i);
} 


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
let z = 60;
while( z>=30 ) {
    if ((z+1)%2===0) console.log(z); 
    z--;
} 

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+## 
// ###+###
// ##+####
// #+#####
// +###### 

let n = parseInt( prompt("Kwadratiin taliig oruul:") ) 

for(let i=0; i<n; i++) { 
    let k = 1; 
    for(let j=0; j<n-k; j++) {
        console.log('#')
    }

    console.log('+')

    for(let t=1; t<k; t++) {
        console.log('#') 
    } 
    console.log('\n') 
    k++; 
}


// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй


function convertRegNum(register) {
    let arr = register.split(''); 
    let birth = arr.slice(2, 4).join('') + '-' + arr.slice(4, 6).join('') + '-' + arr.slice(6, 8).join(''); 

    if(arr[arr.length-1] % 2 === 0) {
        console.log(birth, ' tursun ', 'emegtei')
    } else 
    console.log(birth, ' tursun ', 'eregtei')

} 

*/ 


// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;

let $array = document.querySelectorAll('.red-boxes'); 

for(let i = 0; i < $array.length; i++) {
    $array[i].style.color = "red"; 
} 

// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;

// document.querySelector('#blue-box').style.color = "blue"; 

// 7. Бүх div - ийг бор болго; 

let $divs = document.querySelectorAll('div'); 

for(let i = 0; i < $divs.length; i++) {
    $divs[i].style.color = "brown";  
} 

// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно. 
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ. 
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно. 

const $section = document.createElement('section'); 
$section.style.color = "black"; 

let $article = document.createElement('article'); 
$article.className = "box";  




