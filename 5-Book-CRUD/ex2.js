//we are going to suggest you build a book directory, where you would need to create endpoints, using the four most basic methods: GET, POST, PUT and DELETE.

//You’d use GET for getting all books or getting only one book by id. With the POST method, you can add a new book to the list. You’d need the PUT method for updating the existing book, and it’s evident that with the DELETE method, you will remove the book from the list.

// you can start with data collected as a JSON file.

const express=require("express")
const app= express()
const fs=require("fs")
app.use(express.urlencoded())
app.use(express.json())
//============================================
const data= fs.readFileSync("books.json", "utf-8")
const books= JSON.parse(data)
//======================get=====================
//get all:
app.get("/library", (req, res)=>{
    try {
        res.json(books)
    } catch (error) {
        console.log(error);
    }
})
//get by id:
app.get("/library/:id", (req, res)=>{
    try {
        const id=Number(req.params.id)
        const selected= books.find(b=>b.id===id)
        res.status(200).json({message: "book found", book: selected})
    } catch (error) {
        console.log(error);
        res.json({message: "server error"})
    }
})

//==========================post=====================
app.post("/library", (req, res)=>{
    try {
        const id= books.length+1
        const {name, author}= req.body
        if(name && author){
            books.push({id, name, author})
            res.status(200).json(books)
        }else{
            res.send("hmmm. there is something wrong!")
        }
    } catch (error) {
        console.log(error);
        res.json({message: "server error"})
    }
})

//=========================patch:D======================
app.patch("/library/:id", (req, res)=>{
    try {
        const id= Number(req.params.id)
        const selected= books.find(b=> b.id===id)
        const index= books.findIndex(b=>b.id===id)
        const updated= {...selected, ...req.body }
        books[index]=updated
        res.status(200).json({message: "updated successfully", books})
    } catch (error) {
        console.log(error);
        res.json({message: "server error"})
    }
})

//==========================delete=========================
app.delete("/library/:id", (req, res)=>{
    try {
        const id= Number(req.params.id)
        const filtered= books.filter(b=>b.id!==id)
        res.status(200).json({message: "deleted successfully", books: filtered})
    } catch (error) {
        console.log(error);
        res.json({message: "server error"})
    }
})


app.listen(3000, ()=>console.log("listening to port 3000"))