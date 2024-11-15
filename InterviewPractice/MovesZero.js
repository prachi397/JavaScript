//brute force approach
function moveZeroes(nums) {
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

 //better approach
function movesZerosBetter(nums){
     let fast=0, slow=0;
     while(fast<nums.length){
         if(nums[fast]!==0){
             nums[slow] = nums[fast];
             fast++;
             slow++;
         }else{
             fast++;
         }
     }
     //when fast pointer finishes its iteration then iterate from slow to end and make all of them 0
     while(slow<nums.length){
         nums[slow] = 0;
         slow++;
     }
     return nums;
}

// most optimal approach
//here we will swap our fast with slow whenerver we find non zero in array

function moveZerosOptimal(nums){
    let fast=0, slow=0;
    while(fast<nums.length){
        //if fast is not zero
        if(nums[fast]!==0){
            //swap it with slow
            [nums[fast],nums[slow]] = [nums[slow],nums[fast]];
            fast++;
            slow++;
        }else{
            // if fast is zero move fast
            fast++;
        }
    }
    return nums;
}

console.log(moveZerosOptimal([1,0,0,1,2,5,0]));