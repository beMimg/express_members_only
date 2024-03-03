const User = require("../models/user");
const Message = require("../models/message");

exports.user_get = async (req, res, next) => {
  try {
    const [visitedUser, visitedUserMessages] = await Promise.all([
      await User.findById(req.params.id).exec(),
      await Message.find({ author: req.params.id })
        .sort({ timestamp: -1 })
        .exec(),
    ]);

    res.render("user", {
      user: req.user,
      visited_user: visitedUser,
      visited_user_messages: visitedUserMessages,
    });
  } catch (err) {
    return next(err);
  }
};
