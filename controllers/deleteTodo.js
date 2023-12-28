const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        await Todo.findByIdAndDelete({_id : id});

        res.json({
            success: true,
            message: 'Deleted Successfully'
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }


}