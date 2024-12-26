const http = require("http");
const port = 8081;


// HTTP Methods

/*
>> GET: Inorder to get data from server
>> POST: Sending data to server
>> DELETE: Deleting the data from database
>> PATCH: Updating certain fields
>> PUT: Full Update
*/

const toDolist = ["learn", "apply things", "succed"];

http .createServer((req,res)=>{
    const {method , url} = req;
    // console.log(method , url);
    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDolist.toString());
        }
    }
    res.end();
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h2>The server is started :)</h2>");
    // res.end();
})
.listen(port,()=>{
    console.log(`Node JS Server has been started on port ${port}`);
});