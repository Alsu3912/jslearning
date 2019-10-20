# Tasks

## Palindrom
You need to write a function which takes a string and return whether it a [palindrom](https://en.wikipedia.org/wiki/Palindrome) or not.

```javascript
Input: 'ass'
Output: false

Input: 'assa'
Output: true

Input: ''
Output: true
```

The input string can contain any Unicode character and maybe have any length.

## Strings intersections
Given two strings `S1` and `S2`. You need to return a list of all symbols that contained in both of strings. You should return only unique symbols without duplicates. Ordering of the symbols doesn't matter.


```javascript
Input: 'hello', 'hell' 
Output: 'h,e,l'

Input: 'abc', 'def'
Output: ''

Input: 'aaaaaaaa', 'aaaaaaa'
Output: 'a'
```
## Matrix multiplication
Given two [matrixes](https://en.wikipedia.org/wiki/Matrix_(mathematics)). You need to return a third matrix which is a result of multiplication of the input matrixes. If sizes of the given matrixes are invalid for calculation of the multiplication, you need to throw an error about it.

```javascript
Input: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[5, 4, 1], [1, 5, 4], [0, -1, 5]]
Output: [[5, 4, 1], [1, 5, 4], [0, -1, 5]]

Input: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[5, 4, 1, 3], [1, 5, 4, -1], [0, -1, 5, 6], [1, 1, 1, 1]]
Output: Exception
```
## Brackets
Given a string which consists from `(`, `)` and letters. You need to validate of the brackets correctness in the expression.
```javascript
Input: "((a)(b))"
Output: true

Input: ")("
Output: false

Input: ""
Output: true
```
## Zip arrays
Write a high-order function which will receive 2 arrays of the same type and a function wich map 2 items of the arrays to another value/object with the same type. The function should be applied to the first element of the first arrays and for the first element of the second array and so on. If one array has more elements than another, the "orphan" elements should be the same. 
```javascript
Input: [1, 2, 3], [1, 2, 3], a,b => a+b
Output: [2, 4, 6]

Input: [1, 5, 3, 4], [1, 2], a,b => a*b
Output: [1, 10, 3, 4]

Input: [1, 5, 3, 4], [], a,b => a-b
Output: [1, 5, 3, 4]
```
## Numbers
Create classes `ComplexNumber` and `RealNumber` which encapsulate complex and real numbers respectively. They should be instantiated by calling `new ComplexNumber(1.4, 2)` to create a complex number `1.4+2i` and `new RealNumber(2.5)` for `2.5`. The constructor arguments should be real numbers. Also you need to implement operations `sum(another)` and `multiple(another)` which can receive a complex or a real number. To test your function, please create a list of 100 random real and complex numbers and just sum and multiply them all and log the result.
Here and below please use strict mode in your code.
## Celebrations of the week
Given a list of celebrations in sorted ascending order, you need to return all of celebrations within the current week also in sorted order.
```javascript
Current date: "2019-10-20"
Input: ["2019-10-02", "2019-10-14", "2019-10-19", "2019-10-20", "2019-10-25"]
Output: ["2019-10-14", "2019-10-19", "2019-10-20"]

Input: ["2019-10-02", "2019-10-03", "2019-10-08"]
Output: []
```
