const getData = async() => {
    try{
        const result = await fetch('https://fakestoreapi.com/products/1');
    const data = await result.json();
    console.log(data);
    } catch(error){
        console.log('Data tidak ditemukan');
    }
};

getData();