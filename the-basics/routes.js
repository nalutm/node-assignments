const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Hi, I am learning Node.js! (:</h1>')
        res.write('<form action="/create-user" method="POST"><label>Nome:</label><input type="text" name="username"/><button type="submit">Enviar</button></form>')
        res.write('<body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userNmae = parsedBody.split('=')[1];
            console.log(userNmae);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Userse</title></head>');
        res.write('<body>');
        res.write('<h1>Users</h>')
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

}

module.exports = requestHandler;