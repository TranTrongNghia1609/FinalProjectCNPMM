const userService = require("../services/userServices");

// Đăng ký (Register)
const createUser = async (req, res) => {
  try {
    const data = req.body; 
    const user = await userService.createUserService(data);

    return res.status(201).json({
      message: "User registered successfully!",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// Đăng nhập (Login)
const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userService.login(username, password);
    return res.status(200).json({
      message: "Login successful!",
      user,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

// Lấy thông tin 1 user theo id
const getUser = async (req, res) => {
  try {
    const { id } = req.params; // /user/:id
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Lấy tất cả users
const getAccount = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  handleLogin,
  getUser,
  getAccount,
};
