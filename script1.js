

enum CriteriaValue {
    Ieftine,
    Noi,
    Scumpe,
    Promotionale
}

const myItems = [];
const selectedCriteria = Criteria.Ieftine;

//
// update selectedCriteria based on input 
//

const myFiltered = filterByCriteria(myItems, selectedCriteria);

/**
 * 
 * @param {Array} items 
 * @param {CriteriaValue} criteria 
 */
export function filterByCriteriaValue(items, criteria) {
    const result = [];
    switch (criteria) {
        case CriteriaValue.Ieftine:
            result = filterByIeftine(items);
            break;
        case CriteriaValue.Noi:
            result = filterByNoi(items);
            break;
        case CriteriaValue.Scumpe:
            result = filterByScumpe(items);
            break;
        case CriteriaValue.Promotionale:
            result = filterByPromotionale(items);
            break;
        default: throw new Error("Not implemented");
    }
    return result;
}

function filterByIeftine(items) {

}

function filterByNoi(items) {

}

function filterByScumpe(items) {

}

function filterByPromotionale(items) {

}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} prefix 
 * @returns 
 */
function filterElementsWithPrefix(array) {

    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];


        if (item.startsWith("_")) {
            resultArray.push(item);
        }

    }
    return resultArray;
}


const myArray = [];
const myItem = "_asd";
const myItem2 = {
    name: "john",
    age: 12,
    condition: () => {
        // nothing
    }
}

myArray.push(myItem);

function myCondition(x) {
    return x.startsWith("_");
}

filterWithCondition(myArray, myCondition);
// filterWithCondition(myArray, (x) => x.startsWith("_"));
const filterd = myArray.filter(x => x.startsWith("_"));
const existSomeRandomValue = myArray.some(x => x == "some_random_value");
myArray.at(0);
myArray[0];


const myInputs = ["ASD", "QWE", "GAS"];
const mappedResult = myInputs.map(x => x.charAt(0));


const objects = [
    {
        name: "asda",
        age: 22
    },
    {
        name: "a12`2sda",
        age: 4576
    },
    {
        name: "asdasasa",
        age: 11
    },
    {
        name: "aassda",
        age: 12
    },
]

const names = objects.map(obj => obj.name);

const inventedObjects = names.map(nm => {
    return {
        name: nm,
        age: generateRandomNumber()
    }
})

const aggregatedResult = names.reduce((nm, aggregator) => {
    if (nm.startsWith("asd")) {
        aggregator.push(nm);
    }
}, []);

function generateRandomNumber() {

}


class MyArray {
    length;
    forEach(actionOnItem) {
        for (let i = 0; i < length; i++) {
            const item = elements[i];
            actionOnItem(item);
        }
    }
    filter(criteria) {

    }
    static Abc() {
        asdas
    }
}

const myArrayInstance = new MyArray();

MyArray.prototype.newFunction = () => { };



filterWithCondition(myArray, (x) => x < 10);

[0, 1, 2, 3, 4, 5, 6, 7].forEach(x => console.log(x));

printFirstTenItegers(10);

function printFirstTenItegers(x) {
    let i = 0;
    while (i < x) {
        console.log(i)
    }
}

/**
 * 
 * @param {Array<string>} array 
 * @param {(string) => boolean} condition 
 * @returns 
 */
function filterWithCondition(array, condition) {

    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];    //_asd

        if (condition(item)) {
            resultArray.push(item);
        }
    }

    return resultArray;

}