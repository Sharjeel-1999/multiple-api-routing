


//global varaiable bana diya 
let users = [
    { name: 'User 1', id: 1},
    { name: 'User 2', id: 2},
    { name: 'User 3', id: 3},
    { name: 'User 4', id: 4},
]


// 
authCreateUser = ( req, res ) => {
    if(req.body.name) {
        res.statusCode = 201;
        const newUser = users.length + 1;
        users.push({ 
            name: req.body.name , 
            id: newUser
        })
    
        res.send('<h1>User Created Successfully</h1>')
    } else {
        res.statusCode = 400;
        res.send('<h1>Name Field is Missing  </h1>')
    }

}

// isme saray users ka data mil raha he easily and there is no more code 
authGetAllUsers = (req,res)=>{

    res.statusCode = 200;
    res.json(users)
}




// delete data api
 authdeletedata=(req, res) => {
    res.statusCode = 200;
    
    const filterUser = users.filter((usr) => usr.id !== parseInt(req.params.id));
    users = filterUser;
    res.send('<h1>User Delete Successfully</h1>')
}


// Update ki api he bhai
    authupdate=(req,res)=>{


    const user = users.find((usr) => usr.id === parseInt(req.params.id));
   
        user.name = req.body.name;
        user.id = req.body.id;
        // users.name.splice();
   
      res.send("user update successfully")
}

// ==================simple coding api =====================
authuserhomepage=(req,res)=>{
   
   
    res.send("Hello Users This Is oUr Home Page Want to See")
}
module.exports = {authCreateUser,authGetAllUsers,authdeletedata,authupdate,authuserhomepage}