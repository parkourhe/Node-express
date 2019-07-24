
var express = require('express')

var app = express()

app.engine('html',require('express-art-template'))



var comments = [
	{
		name:'小明',
		message:'你好啊aasdasdasdsa',
		dateTime:'2019/12/12'
	},
	{
		name:'小明',
		message:'你好啊aasdasdasdsa',
		dateTime:'2019/12/12'
	},
	{
		name:'小明',
		message:'你好啊aasdasdasdsa',
		dateTime:'2019/12/12'
	},
	{
		name:'小明',
		message:'你好啊aasdasdasdsa',
		dateTime:'2019/12/12'
	}


]
app.use('/public/',express.static('./public/'))


app.get('/pinglun',function(req,rep){
	console.log(req.query);

	var data = req.query

	data.dateTime = '2020/9/99'

	comments.unshift(data)

	rep.redirect('/')
})


app.get('/post',function(req,rep){
	rep.render('post.html')
})


app.get('/',function(req,rep){
	rep.render('index.html',{
		comments:comments
	})
})



app.listen('3000',function(){
	console.log('running...');
})
