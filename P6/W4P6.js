// JavaScript source code
var num1, num2, num3, median;
num1 = parseInt(prompt("Please enter number 1: "));
num2 = parseInt(prompt("Please enter number 2: "));
num3 = parseInt(prompt("Please enter number 3: "));

function findMedian(num1, num2, num3) {
	/* To the right of the comma: Math.Max(num1, num2), num3 finds the max between num1 and num2
	 * After getting the max between the two
	 * It finds the min between whatever we get from the above and num3.
	 * To the left of the comma: Finds the min between num1 and num2. 
	 * Bigger bracket: Then it finds the max between the two mins obtained. 
	 */
	median = Math.max(Math.min(num1, num2), Math.min(Math.max(num1, num2), num3));
	return median;
}

console.log("The median = " + findMedian(num1, num2, num3));