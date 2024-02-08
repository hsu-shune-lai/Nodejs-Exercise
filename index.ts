import fs from "fs";
import http from "http";
const PORT = 5000;
const server = http.createServer((request,response)=>{
console.log("http method is ",request.method);

const testData={id:1,name:"Shune"};

response.writeHead(200,"OK", {"content-type": "application/json"});
response.write(JSON.stringify(testData));
response.end();
})
server.listen(PORT,()=>console.log("server is listening on port ", PORT));

const test = fs.readFileSync("index.html");
console.log(test);