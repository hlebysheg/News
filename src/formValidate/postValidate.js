export const requiredField = value => {
    if(value) return undefined ;
    return 'Field is required';
}

export const  maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return "Max length is " + maxLength + " sybols";
    return undefined;
}

export const minLengthCreator = (minVal) => (value) => {
    if(value.length < minVal) return "min length is " + minVal + " sybols";
    return undefined;
}