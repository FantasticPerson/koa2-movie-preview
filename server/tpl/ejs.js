// <% if (names.length) { %>
//     <ul>
//       <% names.forEach(function(name){ %>
//         <li foo='<%= name + "'" %>'><%= name %></li>
//       <% }) %>
//     </ul>
//   <% } %>

// <html>
//   <head>
//     <script src="../ejs.js"></script>
//     <script id="users" type="text/template">
//       <% if (names.length) { %>
//         <ul>
//           <% names.forEach(function(name){ %>
//             <li><%= name %></li>
//           <% }) %>
//         </ul>
//       <% } %>
//     </script>
//     <script>
//       onload = function(){
//         var users = document.getElementById('users').innerHTML;
//         var names = ['loki', 'tobi', 'jane'];
//         var html = ejs.render(users, { names: names });
//         document.body.innerHTML = html;
//       }
//     </script>
//   </head>
//   <body>
//   </body>
// </html>

module.exports =`
<!DOCTYPE html>
<html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Koa Server Html</title>
            <link href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h1><%= you %></h1>
                        <p>This is <%= me %></p>
                    </div>
                    <div class="col-md-4">
                        <p>动态ejs模板引擎</p>
                    </div>
                </div>
            </div>
        </body>
    </html>`