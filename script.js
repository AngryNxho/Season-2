var twoSum = function(nums, target) {
    let list = []
    let suma;
    let found = false;
    for(let x=0; x < nums.length; x++){
        if (found){
            break
        }
        for(let z=1; z < nums.length; z++){
            suma = nums[x] + nums[z]
            if(x == z){
                continue
            }else{
                if(suma == target){
                    list.push(x)
                    list.push(z)
                    found = true;
                    console.log(list)
                    break;
                }
            }
        }

    }
    return list
};

console.log(twoSum([1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11));
