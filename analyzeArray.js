function analyzeArray(arr){
    let average = 0, min = arr[0], max = arr[0], length = arr.length;
    for (let i = 0; i < length; i++){
        if (arr[i] < min){
            min = nums[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
        average += arr[i]
    }
    average /= length;
    return {'average': average, 'min': min, 'max': max, 'length': length}
}

module.exports = analyzeArray