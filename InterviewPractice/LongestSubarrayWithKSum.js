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

//prefix sum / cumulative sum approach --> optimal solution
// arr = [10, 5, 2, 7, 1, 9]
// cm =  [10,15,17,24,25,34]
// if we substract  25-10, then we will get 15 so the answer is [5,2,7,1]
function longestSubarrayHavingSumKOptimal(N,K,nums) {
    let maxLength = 0;
    let sum = 0;

    let mp = new Map();

    //set sum 0 at -1 index to handle edge case
    mp.set(0,-1);

    //iterate over the array
    for(let i=0;i<N;i++){
        //calculate cumulative sum
        sum += nums[i];
        //get subtrahend, the value whihc needs to be subtracted from the cumulative sum to get sum K
        let subtrahend = sum-K;

        //if map has subtrahend
        if(mp.has(subtrahend)){
            //find index of subtrahend
            let indexSubtra = mp.get(subtrahend);
            //calculate length
            let length = i-indexSubtra;
            //update the maxlength
            maxLength = Math.max(maxLength, length);
        }
        //if map does not have cumulative sum
        if(!mp.has(sum)){
            //set the cumulative sum at index i
            mp.set(sum,i);
        }
    }
    return maxLength

}
console.log(longestSubarrayHavingSumKOptimal(6,15,[10,5,2,7,1,9]));