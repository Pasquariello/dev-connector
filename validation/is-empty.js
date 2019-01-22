//is empty method that checks for the following

// function isEmpty(value) {
//     return(
//         value === undefined ||
//         value === null ||
//         (typeof value === 'object' && Object.keys(value).length === 0) ||
//         (typeof value === 'string' && value.trim().length === 0)
//     );
// }

//above method refactored as arrow function: 
const isEmpty = (value) => 
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;