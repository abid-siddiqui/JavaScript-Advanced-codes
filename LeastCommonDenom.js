/*function LCD(arr1)
{
	var LCD_arr;
	for (var i = 2; i < arr1.Length; i++ )
		while (arr1)

return 
} */

function primeFactors(num)
{
	var factors = [];
	var MaxFactor = Math.sqrt(num);
	divides = num;
	remains = num;
	for (var j = 2; j <= num; j++)
	{
		remains %=  j;
		divides /=  j; 
		console.log("remains: "+ remains + ", divides: "+ divides);
		if (remains == 0  && divides != 1)
		{
			factors.push(j);
			primeFactors(divides);
		}
		else if (remains == 0  && divides == 1)
		{
			factors.push(j);
			continue;
		}
	}
	console.log("factors length is : " + factors.length);
	return factors;
}

var ar = [4];  //, 6, 8, 10, 13];
var len = ar.length;
console.log("ar length is :" + ar.length);
for (var k= 0; k < ar.length; k++)
{
	var facts = [];
	facts = primeFactors(ar[k]);
	console.log("facts length is : "+ facts.length);
	console.log("prime factors of : "+ ar[k] + " are");

	for (var l = 0; l < facts.length; l++)
	{
		console.log("     " + facts[l]);
	}

}
