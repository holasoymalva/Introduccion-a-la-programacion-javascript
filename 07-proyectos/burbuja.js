



// const arreglo = [45,17,23,67,21];
            //   0  1  2  3  4
            //   17 45

const swap = function(arr, posicion1, posicion2) {
    let temp = arr[posicion1];
    arr[posicion1] = arr[posicion2];
    arr[posicion2] = temp;
}

const ordenamientoBurbuja = function(nums){
    let i;
    let j;
    let arrLen = nums.length;
    for ( i = 0; i < arrLen; i++) {
        for ( j = 0; j < arrLen -i -1; j++) {
            if (nums[j] > nums[j+1]) {
               swap(nums,j, j+1) ;
            }
            console.log(nums[j]);
        }
    }
    return nums;
}

console.log(
    ordenamientoBurbuja(arreglo)
);


const arreglo = [45,17,23,67,21,0,4,-1];

function quicksort(array){
    if (array.length <= 1) {
        return array;
    } else {
        let pivot = array[0];
        let left = [];
        let right = [];
        for (let index = 1; index < array.length; index++) {
            if (array[index] < pivot) {
                left.push(array[index]);
            }else{
                right.push(array[index]);
            }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    }
}

console.log(
    quicksort(arreglo)
);