const express = require('express')
 const app = express()
 const port=3000;
const path= require('path')
const { v4: uuid } = require('uuid'); //For generating ID's



// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

 /// set ejs engnge

// Our fake database:


    
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]
// **********************************
// INDEX - renders multiple comments
// **********************************
console.log(comments.length)

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.listen(3000,()=> console.log(`listening on ${port}`))


 app.get('/comments/new',(req,res)=>{

    res.render('comments/new')
 })


//getting all
 app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})
//posting******

 app.post('/comments',(req,res)=>{
    const {comment,username} =req.body
    comments.push({comment,username,id :uuid()})
    res.redirect('/comments')
 })


 
 
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})


 app.get('/tacos',(req,res)=>{

    res.send('get /taco respones')
 })

 app.post('/tacos',(req,res)=>{
        console.dir(req.body)
        const {qty,meat}=req.body
    res.send(`nice choice with${meat} , but still to much ${qty} !!`)
 })