function moveZeroes(nums) {
    //brute force approach
    let result = [];
    let zeroCount = 0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            result.push(nums[i]);
        }
        else{
            zeroCount++;
        }
    }
    for(let i=0;i<zeroCount;i++){
        result.push(0);
    }
    return result;
}

console.log(moveZeroes([1,0,0,1,2,5,0]));