const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','page')

app.get('/',(req,res)=>{
    
    // Get all blog post from mongodb
    
    res.render('index',{
        courseName : 'NodeJS入門課程',
        time : now,
        blogs : articles,
        title : '首頁'
    })
})

/* app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
}) */

app.use((req,res)=>{
    res.status(404).render('404',{title : '找不到'})
})

app.listen(3000)