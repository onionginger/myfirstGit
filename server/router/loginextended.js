var fs = require('fs')

module.exports = fuction(req,res) {
let userobj = {
    "userid": req.body.userid,
    "username": req .body.username,
    "userbirthdate":req.body.userbirthdate,
    "userage":req.body.userage
}
    let uArray = [];
    fs.readfile('server/date/extendedusers.json', 'utf8', function(err,data){
        if (err)throw err;
        uArray = JSON.parsa(date)
        uArray.push(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile('server/data/extendedusers.json', uArrayjson, 'utf-8',function(err) {
            if (err) throw err;
            res.send(uArray);

        })

    })
}
