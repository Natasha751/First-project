
   // Input array contain some elements.
   //find method returns the value of the first element in an array that passes the test
   var array = [10, 20, 30, 40, 50];
 
   // Method (return element > 10).
   var found = array.find(
       function (element) {
       return element > 20;
   }
   )
   console.log(found);
   //find index returns the index of the first element in an array that pass a test
   var age=[10,87,89,76]
   var b= age.findIndex(function(element){return element >20;});
   console.log(b);
   
   
