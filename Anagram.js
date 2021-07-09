var isAnagram = function(s, t) {

    const objectMapper = (x) => {
        let objectMap = {};

        for (let i = 0; i < x.length; i++) {
            const element = x[i];
            if (!(x[i] in objectMap)){
                objectMap[x[i]] = 1;
            }else{
                let count = objectMap[x[i]];
                count++;
                objectMap[x[i]] = count;
            }
        }
        return objectMap;
    }

    const sObjectMap = objectMapper(s);
    const tObjectMap = objectMapper(t);

    function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
    
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            console.log(false);
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
    
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                console.log(false);
                return false;
            }
        }
    
        // If we made it this far, objects
        // are considered equivalent
        console.log(true);
        return true;
    }
   return isEquivalent(sObjectMap, tObjectMap);
    
    
};

isAnagram("anagram", "nagaram");
isAnagram("rat", "car");