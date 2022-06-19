var t1=0;
var t2=1;
var next_term=t1+t2;
console.log(t1,t2)
for(i=3;i<=8;i++)
{
    console.log(next_term)
    t1=t2;
    t2=next_term;
    next_term=t1+t2;
    

}