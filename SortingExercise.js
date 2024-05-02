function swap(array, x, y) {
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}



function sorting1(array) {
    let size = array.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    console.log(array);
}

function sorting2(array) {
    let size = array.length;
    for (let i = 0; i < size; i++) {
        let temp = i;
        for (let j = i; j < size; j++) {
            if (array[j] < array[temp]) {
                temp = j;
            }
        }
        swap(array, i, temp);
    }
    console.log(array);

}

function sorting3(array) {
    let size = array.length;
    const left = [];
    const right = [];
    let mid = array[0];
    // console.log(mid);
    for (let i = 1; i < size; i++) {
        if (array[i] < mid) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }

    if (left.length>0) {
        sorting3(left);
        // console.log(left);
    }
    sortedArr3.push(mid);
    if (right.length > 0) {
        sorting3(right);
        // console.log(right);

    }
}


const array1 = [4, 6, 3, 5, 2, 1];
const array2 = [7, 6, 2, 5, 9, 1];
const array3 = [4, 6, 3, 5, 2, 1];
sorting1(array1);
sorting2(array2);

const sortedArr3 = [];
sorting3(array3);
sortedArr3.reverse;
console.log(sortedArr3);