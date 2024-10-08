const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.end("home page");
    }
    else if (req.url == "/about") {
        res.end("about page");
    }
    else if (req.url == "/getproductdata") {
        
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) {
            res.end("NO data")
             console.log(err)
            } else {
                const productdata = JSON.parse(data);
                res.end(JSON.stringify(productdata.products)); 
            }
        });
    }
    else if (req.url == "/user"){
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if(err){
                console.log(err)
            }else{
                const userdata = JSON.parse(data);
                res.end(JSON.stringify(userdata.user))
            }
        })
    }
    else {
        res.end("error Not Found");
    }
});

server.listen(3030, () => {
    console.log("Server is running on port 3030");
});

