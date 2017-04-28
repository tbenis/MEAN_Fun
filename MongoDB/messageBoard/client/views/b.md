<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Message Board</title>
  </head>
  <body>
    <h1>The Dojo Message Board</h1>

    <form action="/mprocessing" method="post">
      <p>Name: <input type="text" name="name" value=""></p>
      <p>Message: <input type="text" name="message" value=""></p>
      <input type="submit" value="Post Message">
    </form>

    <h1>Name: <%= mresults[i].name%></h1>
    <h5>Message: <%= mresults[i].message%></h5>
    <% for(var j = 0; j < cresults.length; j++){ %>

      <%if(cresults[j]._message == mresults[i]._id){%>
    <p>Name: <%= cresults[j].commenter%></p>
    <p>Comment: <%= cresults[j].comment%></p>

  <%}%>
    <form action="/cprocessing/<%= mresults[i]._id %>" method="post">
      <p>Name: <input type="text" name="cname" ></p>
      <p>Comment: <input type="text" name="comment" ></p>
      <input type="submit" value="Post Comment">
    </form>
      <hr>

      <%}%>
  </body>
</html>
