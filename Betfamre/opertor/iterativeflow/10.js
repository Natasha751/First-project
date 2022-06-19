var i =54;
var reverse =0;

while(i>0)
{
     var remainder=i%10;
    reverse=reverse*10+remainder;
    
    i=Math.floor(i/10);
}
console.log( reverse +"is a reverse  of given number")