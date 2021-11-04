console.log('hello from node.js')

//что бы создать сервер^
//es6:
/*import express from 'express'*/

//импорт библиотеки express
const express=require('express')

//вызвали функцию и получили конфигурационные объект для нашего приложения
const app=express()

const port=8000

const emails=[
{"id":1,"topic":"Email 1 topic","head":1,"title": " 1 titleq"},
{"id":3,"topic":"Email 3 topic","head":2,"title": " 2 titleq"},
{"id":2,"topic":"Email 2 topic","head":3,"title": " 3 titleq"},
{"id":5,"topic":"Email 5 topic","head":5,"title": " 4 titleq"},
{"id":6,"topic":"Email 6 topic","head":6,"title": " 5 titleq"},
{"id":8,"topic":"Кекс","head":10,"title": " 6 titleq"},
{"id":7,"topic":"морозиво","head":4,"title": " 7 titleq"},
{"id":10,"topic":"хот дог","head":12,"title": " 10 title"}
]

//http метод get принимает первыый параметр- адрес по которому мы хотим что то отдавать
//второй параметр это функция коллбек которая принимает 2 параметра
// req -запрос с фронт енда, с него можно прочитать всю информацию(баги,)
// res- это объект который вы будете обратно отправлять на фронт. в него записывайте ответ
app.get('/api/emails',(req,res)=>{
 /*   res.send('Hello from server. This is was created by res.send()')*/
    res.send(emails)
})

//с помощью функции app.listen функция коллбек которая бедет выполнена после запуска сервера
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})
