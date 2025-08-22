require("dotenv").config();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const createUserService = async (userData) => {
  try {
    

    //hash user password
    const hashPassword = await bcrypt.hash(userData.password, saltRounds);

    //save user to database
    let result = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashPassword,
      fullName: userData.fullName,
      gender: userData.gender,
      dob: userData.dob,
      phone: userData.phone,
      role: "User",
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
// export function
module.exports = {
  createUserService,
};