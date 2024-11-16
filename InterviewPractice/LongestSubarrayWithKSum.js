//brute force approach
// [10,5,2,7,1,9]
// for i = 0, subarrays = [10], [10,5], [10,5,2], and so on...
// for i = 1, subarrays = [5], [5,2], [5,2,7], [5,2,7,1], and so on...

function longestSubarrayHavingSumK(N,K,nums) {
    //generate all the subarrays
    //calculate sum of each subarray
    //check the sum equal to k and update the maximum length
    //return maximum length

    let maxLength = 0;

    //loop through each starting point of the array
    for(let i=0;i<N;i++){
        let currentSum = 0;
        //for each starting point loop through the rest of the array to get the subarray
        for(let j=i;j<N;j++){
            currentSum += nums[j];
            //check if currentSum is equal to k
            if(currentSum === K){
                //update the maxlength with the length of the current array having K sum
                maxLength = Math.max(maxLength, j-i+1);
            }
        }
    }
    return maxLength;
}
console.log(longestSubarrayHavingSumK(6,15,[10,5,2,7,1,9]));