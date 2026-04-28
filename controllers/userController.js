import User from "../models/user.js";

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400);
      return next(new Error("name & email fields are required"));
    }

    const isUserExists = await User.findOne({ email });
    if (isUserExists) {
      res.status(409);
      return next(new Error("User already exists"));
    }

    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      user,
      message: "User created successfully",
    });
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    return next(error);
  }
};

export { createUser, getAllUsers };
