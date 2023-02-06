var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write('<html lang="fi">'); //( aloitus siis)
    response.write(
      '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
    ); // toiimiiiii Ä ja ö kirjaimet!!!

    response.write(
      `<table> 
      <tr> 
        <th>Name</th> 
        <th>Address</th> 
        <th>City</th>
    </tr> 

      <tr>
         <td>Matti Meikäläinen</td>
         <td>Timotie 1, as 10</td>
         <td>Tampere</td>
     </tr>

     <tr>
         <td>Maija Virtanen</td>
         <td>Asematie 12</td>
         <td>Kiljava</td>
     </tr>
    </table> 
    `
    );

    response.write(`
    <style>
    table, th, td {
        border: 1px solid;
    }
    
    </style>
    `);

    response.end("</html>");
  })
  .listen(8084);

console.log("Server running 8084");

/* 
Why use web server created with Node.js?

- better efficiency and overall developer productivity.
- code sharing and reuse.
- speed and performance.
- easy knowledge sharing within a team.
- a huge number of free tools.
*/
