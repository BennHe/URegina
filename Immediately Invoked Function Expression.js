function celebrityIDCreator (theCelebrities)
{
  var i;
  var uniqueID = 100;
  for(i=0;i<theCelebrities.length;i++)
  {
     theCelebrities[i]["id"]=function(j)// the j parametric variable is the i passed in on invocation of this IIFE​
      {
	return function()
	 {
	   return uniqueID + j;// each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array​
	 }()// BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.​
      }(i)// immediately invoke the function passing the i variable as a parameter​
  }
 return theCelebrities;
}


var actionCelebs = [{name:"Ben",id:0},{name:"Benjamin",id:0},{name:"Ben1",id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var benID=createIdForActionCelebs[0];
console.log(benID.id);
var Ben1ID = createIdForActionCelebs[1];
console.log(Ben1ID.id);

