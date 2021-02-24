// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai');
//     }, 2000);
// });

// console.log(coba);
// coba.then(coba => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5100;
        if(waktu < 5000) {
            setTimeout(() => {
            resolve('Selesai');
        }, waktu);
        } else {
            reject('kelamaan');
        }

    });
}

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(err => console.log(err));

async function cobaAsyn() {
    try {
        const coba = await cobaPromise();
        console.log(coba)
    } catch(err) {
        console.error(err);
    }
}

cobaAsyn();