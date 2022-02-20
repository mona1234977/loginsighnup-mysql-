var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mona@123",
  database: "loginsignup"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const readline=require('readline-sync');
    const validator=require ('validator')
    var user = readline.question("DO YOU WANT TO \n1)SIGN UP OR \n2)LOGIN :")
    const strongpsw =/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
    if (user=="1"){
        const name = readline.question("ENTER THE USERNAME :")
        const email= readline.question("ENTER THE EMAIL :")
        const password = readline.question("ENTER THE PASSWORD :")
        if (validator.isEmail(email)==true){
            if (password.match(strongpsw)){
                var sql = "INSERT INTO users (NAME,EMAIL ,PASSWORD ) VALUES ('"+name+"','"+email+"','"+password+"')";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log ("signup sucessful")
                    console.log("1 user registered");
                });
            }
            else{
                console.log("please create strong password")
            }
        }
        else{
            console.log("invalid email formate")
        }
    }

if  (user=="2"){
    const username= readline.question("ENTER THE USERNAME :")
    const password = readline.question("ENTER THE PASSWORD :")
    var sql = "select * from users where PASSWORD ='"+password+"'";
        con.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result)
        // var stt="select * from users " 
        console.log (`CONGRACT ${username} logged in succesfully!!!!!!`)

    });
} 
});