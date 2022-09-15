const User = require('../Models/User')

// get all the users///
const getAllUser = async (req, res) => {
    try {
        const userList = await User.find()
        if (userList.length === 0) {
            return res.status(201).json({ msg: 'your data is empty' })
        }
        else {
            res.status(201).json({ users: userList })
        }

    } catch (error) {
        res.status(401).json({ msg: 'get all users is failed' })
    }
}

//get one user with id////
const getOneUser = async (req, res) => {
    const id = req.params.id
    try {
        const findOneUser = await User.findById(id)
        if (!findOneUser) {
            return res.status(201).json({ msg: 'user does not exist ' })
        }
        else {
            res.status(201).json({ user: findOneUser })
        }

    } catch (error) {
        res.status(401).json({ msg: 'operation is failed' })
    }
}

// add new users////
const addUser = async (req, res) => {
    const userInfo = req.body;
    try {
        const newUser = new User({ userName: userInfo.userName, email: userInfo.email, age: userInfo.age });

        const oneUser = await User.findOne({ email: newUser.email });
        if (oneUser) {
            return res.status(422).json({ msg: 'user already exist' });
        }
        await newUser.save();
        res.status(201).json({ msg: `${newUser.userName} added successfully`, user: newUser });

    } catch (error) {
        res.status(401).json({ msg: 'add user is failed' });
    }
}


//delete user////
const deleteUser = async (req, res) => {
    //const userInfo = req.body;
    id = req.params.id;
    try {
        // const deletedUser = await User.findOneAndRemove({ email: userInfo.email });
        const deleteUser = await User.findByIdAndDelete(id);
        const remainingUsers = await User.find();
        res.status(201).json({ msg: `${deleteUser.userName} was succefully deleted`, deletedUser: deleteUser, user: remainingUsers });

    } catch (error) {
        res.status(401).json({ msg: 'removing operation is failed' });
    }
}

/// update user ////
const updateUser = async (req, res) => {
    const id = req.params.id;
    const userInfo = req.body;
    try {
        // const updatedUser = await User.findOneAndUpdate({ email: userInfo.email },
        //     { userName: userInfo.userName }, { age: userInfo.age })
        const updatedUser = await User.findByIdAndUpdate(id, userInfo, { new: true });
        const allUsers = await User.find();
        return res.status(201).json({ msg: `${updatedUser.userName} was succefully updated `, user: updatedUser, users: allUsers });

    } catch (error) {
        res.status(401).json({ msg: 'updated failed' });
    }
}
module.exports = { getAllUser, getOneUser, addUser, deleteUser, updateUser }