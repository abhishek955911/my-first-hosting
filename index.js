import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>")

})
app.get("/contact",(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            text-align: center;

        }
    </style>
</head>
<body>
    <div class="container">
        <h1>URL shortener</h1>
        <form action="" id="shorten-form">
            <div>
                <label for="url" > Enter url</label><br>
                <input type="url" name="url"  id="url" required>
            </div>
            <div>
                <label for="shortCode" > Enter shortcode</label><br>
                <input type="text" name="shortcode"  id="shortCode" required>
            </div>
            <br>
            <button type="submit">Shorten</button>
        </form>
        <h2>SHORTENED URL</h2>
        <UL ID="shortened-urls"></UL>
    </div>
    <script>
        document.getElementById("shorten-form").addEventListener( "submit",(e)=>{
            e.preventDefault();
            const formdata =new FormData(e.target);
            const url = formdata.get('url');// note name is given in " " in get 
            const shortcode = formdata.get('shortcode');

            console.log(url)
            console.log(shortcode)

        })
    </script>

    
</body>
</html>`)

})
const port = process.env.port  || 8080;  
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})