const validateTodo = (req,res,next)=>{
    const { title, description } = req.body;
    if(!title || !description) {
        res.status(400).json ({message : "all fields required"});
    }
    next();
};

modules.exports = {
    validateTodo,
};