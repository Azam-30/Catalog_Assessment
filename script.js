const fs = require('fs');


function parseJson(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}


function decodeValue(base, value) {
    return parseInt(value, base);
}


function lagrangeInterpolation(points, k) {
    let constantTerm = 0;

    for (let i = 0; i < k; i++) {
        let { x: xi, y: yi } = points[i];
        let productTerm = yi;

        for (let j = 0; j < k; j++) {
            if (j !== i) {
                let { x: xj } = points[j];
                productTerm *= xj / (xj - xi);
            }
        }

        constantTerm += productTerm;
    }

    return Math.round(constantTerm);
}


function findSecretConstant(jsonFilePath) {
    
    const input = parseJson(jsonFilePath);
    const n = input.keys.n;
    const k = input.keys.k;

    
    const points = [];
    for (let i = 1; i <= n; i++) {
        const key = String(i);
        if (input[key] && input[key].base && input[key].value) {
            const x = parseInt(key);
            const base = parseInt(input[key].base);
            const value = input[key].value;
            const y = decodeValue(base, value);

            points.push({ x, y });
        } else {
            console.log(`Root ${key} is missing or invalid.`);
        }
    }

    
    if (points.length < k) {
        console.error("Not enough valid points to calculate the secret.");
        return;
    }

    
    const secretConstant = lagrangeInterpolation(points, k);
    console.log("The secret constant (c) is:", secretConstant);
}


const testCases = ['input_case1.json', 'input_case2.json']; 

testCases.forEach(file => {
    console.log(`Processing test case: ${file}`);
    findSecretConstant(file);
});
