const express=require('express')
const app=express()
const {chats} =require('./data')

const port=process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("All work is working well")
})
app.get('/api/chats',(req,res)=>{
   res.send(chats)
})


app.get('/api/chats/:id',(req,res)=>{

    const {id}=req.params
   const result=chats.find((element,index)=>{
    return element._id===id
   });
if(result){
    res.send(result.chatName)

}
else{
    res.send('id not found')
}

})

app.get('/*',(req,res)=>{
    res.send("error 404 page not found")
})
app.listen(port,()=>{
    console.log("server is listening")
})