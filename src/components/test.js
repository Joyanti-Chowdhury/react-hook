const wraperFunction = (func)=>{
    return (num) =>{
        return func(num) * 2;
    }
};

const addOne = (one)=>{
    return one + 1;
};
console.log('1', addOne(2));
const addOneAndDouble = wraperFunction(addOne);

console.log(addOneAndDouble(4))

console.log('2',addOne(8));