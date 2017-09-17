const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const main = ctx => {
	ctx.response.type = 'html';
	// console.log(fs.createReadStream('index.html'));
	ctx.response.body = fs.createReadStream('./index.html');
}

app.use(main);
app.listen(3001);

console.log('homepage is running at 3001');