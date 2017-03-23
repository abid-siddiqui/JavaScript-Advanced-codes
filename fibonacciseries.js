function fibNumber(nth) {
	if (nth == 0)
		return 0;
	else if (nth == 1)
		return 1;
	else
		return fibNumber(nth - 1) + fibNumber(nth - 2);
}

for (i= 0; i < 25; i++)
{
	console.log("fibbonacci Number "+ i + " is " + fibNumber(i))
}
