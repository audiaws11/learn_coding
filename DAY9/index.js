// const div = document.createElement('div');
// const number = [10, 28, 8, 4, 6];
// const temp = '';
// number.map((item,index) =>{
//     let p = document.createElement('p');
//     p.innerHTML = `Ini adalah item ${item}`;
//     div.append(p);
// })
// document.body.append(div);

async function getData() {
    const app = document.getElementById("app");
    const div = document.createElement("div");
  
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
  
      data.products.map((item, index) => {
        const card = document.createElement("div");
  
        // <p>iPhone</p>
        const p = document.createElement("p");
        p.innerHTML = item.title;
        card.append(p);
        // <p>iPhone</p>
        const q = document.createElement("p");
        q.innerHTML = item.description;
        card.append(q);
        // <p>price</p>
        const r = document.createElement("p");
        r.innerHTML = "$ " + item.price;
        card.append(r);
  
        // <img src="thumb" alt="" />
        const img = document.createElement("img");
        img.src = item.thumbnail;
        card.append(img);
        img.style.width = '100%'
  
        //assign style using dom
        card.style.border = "1px solid";
        card.style.padding = "10px";
        card.setAttribute('class', 'card')
        app.append(card);
      });
    } catch (error) {
      console.log(error);
    }}

getData();