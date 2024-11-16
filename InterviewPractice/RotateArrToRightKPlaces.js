// Problem Description
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input format
// First line contains two space separated integers N and K. Second line contains n space separated integers.
// Output format
// Only line contains N space separated integers.
// Sample Input --->
// 7 3
// 1 2 3 4 5 6 7

// Sample Output --->
// 5 6 7 1 2 3 4

//function to reverse the array
function reverse(start,end,arr){
    while(start<end){
        let temp= arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
function rotateArray(n,k,nums){
    //handle edge case when k is greater than n because when k is equal to array size then we will 
    // get same array after roattion by k place
    k = k%n; 
    //reverse first n-k elements
    reverse(0,n-k-1,nums);
    //reverse last k elements
    reverse(n-k,n-1,nums);
    //reverse entire array
    reverse(0,n-1,nums);
    return nums;
}
console.log(rotateArray(7,3,[1,2,3,4,5,6,7]));
