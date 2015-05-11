var fib=function(x){
    var a=1;
    var b=1;
    var result=1;
    var i=0;
    console.log(a);
    console.log(b);
    while(result<x){
       console.log(a+b);
       result=a+b;
       a=b;
       b=result;
       i++;
        }
};
fib(21);
