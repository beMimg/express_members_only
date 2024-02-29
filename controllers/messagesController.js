// const mongoose = require("mongoose");
// const Message = require("../models/message");

// exports.message_list_get = async (req, res, next) => {
//   try {
//     const messageList = await Message.find().populate("author").exec();

//     res.render("messages_list", {
//       message_list: messageList,
//     });
//   } catch (err) {
//     return next(err);
//   }
// };
