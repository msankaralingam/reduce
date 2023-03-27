const numbers = [1, 2, 3, 4, 5];
var y=numbers.reduce(function(preVal,val,index){
	return preVal+val+index*2.5;
})
console.log(y);