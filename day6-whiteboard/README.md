# Problem Domain
Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)

##### Solution

Created a function named recurs that takes 2 argumens. Then check if the arguments are equal to 0, if true, return undefined. Then if there is no count, return null. If the type of count is not a number  and the number is less than 0, we return null. But if the count is more than 0, we decrement to 0.  