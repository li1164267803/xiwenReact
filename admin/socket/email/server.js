const express=require('express')
const app=express()

const mail=require('./mail')
const randomFnsCode=()=>{
    return (1000+Math.round(Math.random()*10000-1000))//生成4位随机数
}
app.get('/getEmilCode',(req,res)=>{
    let email = req.query.email
    // let code = parseInt(Math.random()*1000)
    mail.sendMail(email,randomFnsCode())
    .then(()=>{
        res.send({err:0,msg:'验证码发送ok'})
    })
    .catch(()=>{
        res.send({err:-1,msg:err})
    })
})

app.listen(3000,()=>{
    console.log('服务器启动')
})
