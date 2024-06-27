// 상품코드 입력받고
// 객체 하나에는 codetree, 50으로 초기화
// 나머지는 새롭게 입력받은 값 넣기

class ProductInfo {
    constructor (code = 0, name = '') {
        this.code = code;
        this.name = name;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const productInfo2 = new ProductInfo(+input[1], input[0]);
const productInfo = new ProductInfo(50, 'codetree')

const products = [productInfo, productInfo2];

for (let product of products) {
    console.log(`product ${product.code} is ${product.name}`)
}