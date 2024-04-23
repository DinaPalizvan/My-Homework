// here you have a products array. by implementing express app write crud functions related to this array.
//- get functions
//- post
//- put
//- delete
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

//Answer:
const express=require("express")
const app= express()

app.use(express.urlencoded())

//=====================get functions=====================:
//get all products:
app.get("/products", (req, res)=>{
  res.json(products)
})
//get products by price:
app.get("/products/q", (req, res)=>{
  const minPrice=Number(req.query.minPrice)
  const maxPrice=Number(req.query.maxPrice)
  if(!minPrice || !maxPrice){
    res.status(404).send("there is no such product")
  }else{
    const result=products.filter(e=>e.price>=minPrice && e.price<= maxPrice)
    res.status(200).json(result)
  }
})
//get products by id:
app.get("/products/:id", (req, res)=>{
  const id=Number(req.params.id)
  const validId=[]
  products.forEach(e=>validId.push(e.id))
  if(!validId.includes(id)){
    res.status(404).send("id is not valid")
  }else{
    const result= products.find(product=> product.id===id)
    res.status(200).json(result)
  }
})

//=======================post fuction:===========================
app.post("/products", (req,res)=>{
  const {name, price}=req.body
  const id=products.length+1
  products.push({name, price, id})
  if(name && Number(price)){
    res.status(201).json({message: "product created successfully.", product: {id: id, ...req.body}})
  }else{
    res.json({message: "oops! something is wrong"})
  }
})

//======================put finction:=============================
//update by id:
app.patch("/products/:id", (req, res)=>{
  const id= Number(req.params.id)
  const selectedProduct= products.find(p=>p.id===id)
  const index=products.findIndex(p=>p.id===id)
  const updated={...selectedProduct, ...req.body}
  products[index]=updated
  res.status(201).json(products) 
})

//==========================delete function:=========================
//delete by id:
app.delete("/products/:id", (req,res)=>{
  const id=Number(req.params.id)
  const newArray= products.filter(p=> p.id!==id)
  res.status(200).json(newArray)
})


app.listen(3000, ()=>console.log("listening to port 3000"))




  