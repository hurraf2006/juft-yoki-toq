
    
var tyj = +prompt("Son juft yoki tog'ligini bilmoqchi bolsangiz, istalgan son kiriting ")

    
    while( tyj === 0 || isNaN(tyj)) {
           var tyj = +prompt("Cuchvarani hom sanapsiz, faqat son kiritish kerak")

 }
    
 if (tyj%2==0) {
     alert("Siz kiritkan soningiz - juft son: "+tyj)
 } 
    
 else if (tyj%2==1) {
     alert("Siz kiritgan son - tog' son: "+tyj)
 }



