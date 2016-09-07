app.get('/', function(req,res){
    res.render("index.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   res.render('user.html',response);
});