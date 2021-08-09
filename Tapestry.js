const data = {
  brand: {
    families: [
      {
        id: "f1",
        name: "abc",
        parents: [
          { id: "p1", name: "ghi", children: [{ id: "c1", name: "mno" }] },
        ],
      },
      {
        id: "f2",
        name: "def",
        parents: [
          {
            id: "p2",
            name: "jkl",
            children: [
              { id: "c2", name: "pqr" },
              { id: "c3", name: "stu" },
              { id: "c4", name: "vwx" },
            ],
          },
        ],
      },
    ],
  },
};

const data2 = data;

const nestedArraysToObjects = (obj, identifier) => {
  // ADD YOUR CODE HERE
    
    const commmonFunc = (arr, id) => {
        let elMap = {};
        for (let i = 0; i < arr.length; i++) {
            elMap[arr[i][identifier]] = arr[i];
        }
        arr = {};
        arr = elMap;
        return arr;
    }
    
    const newFamily = commmonFunc(obj.brand.families, identifier);
    obj.brand.families = newFamily;
    for (const property in obj.brand.families){
        const newParent = commmonFunc(obj.brand.families[property].parents, identifier);
        obj.brand.families[property].parents = newParent;
    }

    for (const property in obj.brand.families){
        for (const prop in obj.brand.families[property].parents){
            const newChildren = commmonFunc(obj.brand.families[property].parents[prop].children, identifier);
            obj.brand.families[property].parents[prop].children = newChildren
        }
    }
    return obj






// OLD CODE
//   let keys = [];
//   let tempMap = {};
//   let finalMap = {};

//   const resetVars = () => {
//     keys = [];
//     tempMap = {};
//     finalMap = {};
//   }

//   for (let i = 0; i < obj.brand.families.length; i++){
//     for (let j = 0; j < obj.brand.families[i].parents.length; j++){
//         const element = obj.brand.families[i].parents[j][identifier];
//         keys.push(element);
//         tempMap[element] = obj.brand.families[i].parents[j];
//     }
//   }

//   for (let i = 0; i < keys.length; i++) {
//     finalMap[keys[i]] = tempMap[keys[i]];
//   }
// console.log(finalMap);

//   for (let i = 0; i < obj.brand.families.length; i++){
//     for (let j = 0; j < obj.brand.families[i].parents.length; j++){
//         console.log(obj.brand.families[i].parents[j][identifier]);
//         let temp = finalMap[obj.brand.families[i].parents[j][identifier]];
//         console.log(temp);
//         obj.brand.families[i].parents[j] = {};
//         obj.brand.families[i].parents[j] = temp;
//     }
//   }
  
//   resetVars();

//   for (let i = 0; i < obj.brand.families.length; i++) {
//     identifier = identifier.replace(/\"/g, "");
//     const element = obj.brand.families[i][identifier];
//     keys.push(element);
//     tempMap[element] = obj.brand.families[i];
//   }

//   for (let i = 0; i < keys.length; i++) {
//     finalMap[keys[i]] = tempMap[keys[i]];
//   }
//   obj.brand.families = {};
//   obj.brand.families = finalMap;
//   console.log(obj);
};

console.log(JSON.stringify(nestedArraysToObjects(data, "id"), null, 2));
console.log(JSON.stringify(nestedArraysToObjects(data, "name"), null, 2));

/* 👉 SEE THE README FOR INSTRUCTIONS */

const data = require('./data');
const clonedData = require('./cloned');

const nestedArraysToObjects = (obj, identifier) => {
  
  // Helper function to return transformed array per identifier
  const arrayParser = (arr) => {
      let elementMap = {};
      for (let i = 0; i < arr.length; i++) {
          elementMap[arr[i][identifier]] = arr[i];
      }
      arr = {};
      arr = elementMap;
      return arr;
  }
  
  // Parsing through 'families' and setting newFamily in object
  const newFamily = arrayParser(obj.brand.families, identifier);
  obj.brand.families = newFamily;

  // Parsing through 'parents' and setting newParent(s) 
  for (const property in obj.brand.families){
      const newParent = arrayParser(obj.brand.families[property].parents, identifier);
      obj.brand.families[property].parents = newParent;
  }

  // Parsing through 'children' and setting newChildren(s)
  for (const property in obj.brand.families){
      for (const prop in obj.brand.families[property].parents){
          const newChildren = arrayParser(obj.brand.families[property].parents[prop].children, identifier);
          obj.brand.families[property].parents[prop].children = newChildren
      }
  }

  return obj;
}


/*
  👉 HIT 'RUN' TO TEST OUT YOUR CODE IN THE CONSOLE
  (expected outputs for these use cases are in the readme)
*/
console.log(JSON.stringify(nestedArraysToObjects(data, "id"), null, 2));
console.log(JSON.stringify(nestedArraysToObjects(clonedData, "name"), null, 2));
