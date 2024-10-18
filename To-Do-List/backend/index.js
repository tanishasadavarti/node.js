const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());  

app.get("/product", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.parse(data));
            console.log("Data added");
        }
    });
});



app.delete("/delete/:id", (req, res) => {
    const { id } = req.params

    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            // console.log(data)
            let deletedata = JSON.parse(data)
            deletedata = deletedata.filter((el) => el.id != id);
            fs.writeFile("./db.json", JSON.stringify(deletedata), (err) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send("product deleted")
                }
            })
        }
    })
})

app.post("/addproduct", (req, res) => {
    // console.log(req.body)
    // res.send("hello")
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            // console.log(data)
            const newdata = JSON.parse(data)
            newdata.push(req.body)
            // console.log(product)

            fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send("product added")
                }
            })
        }
    })

})


app.patch("/update/:id",(req,res)=>{
    const {id}= req.params
    // console.log(id)
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            let newdata=JSON.parse(data)
            let index = newdata.findIndex((el)=>el.id == id )
            // console.log(index)
           if(index!= -1)
           {
            newdata[index]={...newdata[index],...req.body}
            fs.writeFile("./db.json",JSON.stringify(newdata),(err)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send("product updated")
                }
            })
           }else{
            res.send("product not found")
           }
            // res.send("ok")
        }
    })

})


app.listen(3030, () => {
    console.log("Server is running on port 3030");
});
