var http = require('http');

var server = http.createServer((req, res) => {

    var categoria = req.url;

    res.writeHead(200, {'Content-Type':'text/html'});
    
    if(categoria == '/') 
        res.write('<html><body><h1>Portal de Notícias</h1></body></html>');
    else if(categoria == '/tecnologia')
        res.write('<html><body><h1>Portal de Notícias de Tecnologia</h1></body></html>');
    else if(categoria == '/moda')
        res.write('<html><body><h1>Portal de Notícias de Moda</h1></body></html>');
    else
        res.write('<html><body><h1>Página não encontrada</h1></body></html>');
        
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});



