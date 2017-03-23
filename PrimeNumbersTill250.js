function IsPrime(p1)
{
	var maxDiv = Math.sqrt(p1);
	for (var i= 2; i <= maxDiv; i++)
	{
		var right = p1 % i;
		if (right == 0)
		{ 
			return false;
		}
	}
	return true;
}


for (var j = 2; j < 100; j++)
{
	if (IsPrime(j) == true)
	{
		console.log(j + " is a prime");
	}
}

