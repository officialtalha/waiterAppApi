let obj = {
    Name: "Talha",
    age: 26
};


let getDataApi = async () => {
    try {
        let res = await axios.get('https://crudcrud.com/api/a408619139f44598917c180fcf9f4754/order');
        // console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
};

// async function postDataApi() {
//     try {
//         let res = await axios.post('https://crudcrud.com/api/a408619139f44598917c180fcf9f4754/order', obj);

//     }
//     catch (err) {
//         console.log(err);
//     }
// }
async function deleteDataApi(i) {
    try {
        let res = await axios.delete('https://crudcrud.com/api/a408619139f44598917c180fcf9f4754/order', i);
        // console.log(res.data);
    }
    catch (err) {
        console.log(err);
    }
}


// postDataApi();
// const res = getDataApi();
let res = getDataApi();
for (let i in res) {
    console.log(i);
}
