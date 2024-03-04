const product = [
  {
    id: "1",
    category: "Men's Sneaker",
    name: "Mr. Raju",
    title: "How to get your first job as a self-taught programmer",
    Bookmarked: "Master Microsoft Power Platform and Become an In-Demand!",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  },
  {
    id: "2",
    category: "Men's Sneaker",
    name: "Mr. Raju",
    title: "How to get your first job as a self-taught programmer",
    Bookmarked: "Master Microsoft Power Platform and Become an In-Demand!",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
  },
  {
    id: "3",
    category: "Men's Sneaker",
    name: "Mr. Raju",
    title: "How to get your first job as a self-taught programmer",
    Bookmarked: "Master Microsoft Power Platform and Become an In-Demand!",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: "4",
    category: "Men's Sneaker",
    name: "Mr. Raju",
    title: "How to get your first job as a self-taught programmer",
    Bookmarked: "Master Microsoft Power Platform and Become an In-Demand!",
    img: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
let categoryUpdate = product.map((item) => {
  item.category = "Men";
  return item;
});
console.log(categoryUpdate);

let data = product.map((item) => {
  item.district = "Rajshahi";
  return item;
});
console.log(data);

let remove = product.map((item) => {
  if (item.id == 3) {
    delete item.category;
  }
  return item;
});
console.log(remove);

let update = product.map((item) => {
  item.name = "Jahid Hasan";
  return item;
});
console.log(update);
