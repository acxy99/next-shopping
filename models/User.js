import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  LastName: String,
  email: String,
  accessToken: String,
  token: [String],
});

let User;

try {
  User = mongoose.model("users");
} catch (err) {
  User = mongoose.model("users", UserSchema);
}

export default User;
