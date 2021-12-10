
const fruits = require('./fruits.js')

const Index = () => {
    for(let i of fruits){
        console.log(i)
    }
}

const Find = (index) => {
    let data = fruits[index]

    console.log(data)
}

const Store = (data) => {
    fruits.push(data)
    Index()
}

const Update = (key, name) => {
    fruits[key] = name
    Index()
}

const Destroy = (key) => {
    fruits.splice(key, 1);
    Index()
}

module.exports = {Index, Find, Store, Update, Destroy}