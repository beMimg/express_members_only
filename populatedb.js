// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const Message = require("./models/message");
// const User = require("./models/user");

// const messages = [];
// const users = [];

// async function main() {
//   try {
//     console.log("trying connection to db");
//     await mongoose.connect(process.env.MONGODB_URI);
//     const db = mongoose.connection;
//     console.log("should be connected to db");
//     // console.log("creating users");
//     await createUsers();
//     await createMessages();
//     mongoose.connection.close();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function createUser(index, first_name, last_name, username, password) {
//   try {
//     console.log("trying to create a user");
//     const user = new User({
//       first_name,
//       last_name,
//       username,
//       password,
//     });
//     await user.save();
//     users[index] = user;
//     console.log("user should be created");
//   } catch (err) {
//     console.log("could not create a user, fail");
//   }
// }

// async function createMessage(index, title, text, author) {
//   try {
//     console.log("trying to create a message");
//     const message = new Message({
//       title,
//       text,
//       author,
//     });
//     await message.save();
//     messages[index] = message;
//     console.log("message should be created");
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function createUsers() {
//   await Promise.all([
//     createUser(0, "John", "Miller", "jMiller00", "somerandompass"),
//     createUser(1, "Mike", "Johnson", "mOJohnss", "mjjj1"),
//     createUser(2, "Flynn", "Frok", "fflyrock", "rules"),
//   ]);
// }

// async function createMessages() {
//   await Promise.all([
//     createMessage(0, "some title", "a very cool message for you", users[0]),
//     createMessage(1, "what about this", "i like writting", users[0]),
//     createMessage(2, "feelings", "im feeling good", users[0]),
//     createMessage(3, "dogs", "what upp dogs", users[1]),
//     createMessage(4, "cod", "wanna play some cod?", users[1]),
//     createMessage(5, "no", "i only play minecraft", users[2]),
//   ]);
// }

// main();
