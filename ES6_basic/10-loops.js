export default function appendToEachArrayValue(array, appendString) {
    const newArray = [...array];
    let i = 0;

    for (const value of array) {
        array[i] = appendString + value;
        i++;
    }

    return array;
}