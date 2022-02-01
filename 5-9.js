let x = 40;
step:
    for (let i = 2; i <= x; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue step;
        }
        console.log(i);
    }

