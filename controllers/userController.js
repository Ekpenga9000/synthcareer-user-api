const User = require("../models/userModel"); 

const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user by ID: ", error);
        return res.status(500).json({ error: "Internal server Error" });
    }
};


const updateUser = async (req, res) => {
    const userId = req.params.id; 

    const { firstname, username, password } = req.body; 

    if (!firstname || !username || !password) {
        return res.status(400).json({ error: "Please ensure you're filling the update form properly" }); 
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true }); 

        if (!updateUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json(updatedUser); 
    } catch (error) {
        console.error("Error updating user: ", error);
        return res.status(500).json({ error: "Internal server Error" });
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id; 

    try {
        const deletedUser = await User.findByIdAndDelete(userId); 
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" }); 
        }
        return res.status(204).end(); 
    } catch (error) {
        console.error("Error deleting user: ", error);
        return res.status(500).json({ error: "Internal server Error" });
    }
}

module.exports = {
    getUserById,
    updateUser,
    deleteUser
}