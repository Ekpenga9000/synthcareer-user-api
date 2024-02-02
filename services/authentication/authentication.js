const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

// Register the user
const registerUser = async (req, res) => {
  const { firstname, username, password, confirmPassword } = req.body;

  if (!firstname || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password should be at least 6 characters long" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ firstname, username, password: passwordHash });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

//User login
