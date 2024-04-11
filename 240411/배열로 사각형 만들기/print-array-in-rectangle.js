let arr2d = Array(5).fill(0).map(() => Array(5).fill(0));

for (let i = 0; i < 5; i += 1) {
    arr2d[0][i] = 1;
}

for (let i = 0; i < 5; i += 1) {
    arr2d[i][0] = 1;
}

for (let i = 1; i < 5; i += 1) {
    for (let j = 1; j < 5; j += 1) {
        arr2d[i][j] = arr2d[i - 1][j] + arr2d[i][j-1];
    }
}

for (let i = 0; i < 5; i += 1) {
    let result = '';
    for (let j = 0; j < 5; j += 1) {
        result += arr2d[i][j] + ' ';
    }
    console.log(result);
}