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
