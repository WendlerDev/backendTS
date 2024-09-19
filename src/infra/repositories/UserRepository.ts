
import mongoose, { ObjectId } from "mongoose";
import User, { IUser, UserDocument } from "../../models/UserModel";

export class UserRepository {
  async findUserById(id: ObjectId) {
    if (!mongoose.Types.ObjectId.isValid(id.toString()))
      throw new Error("User ID not found");
    const user = await User.findById(id);
    return user;
  }

  async findUsersByName(name: String) {
    const user = await User.find({ name });
    if (!user || user.length === 0)
      throw new Error("User not found in database");
    return user;
  }

  async saveUser({
    name,
    active,
    timeClasses,
    contact,
    externalData,
  }: IUser): Promise<UserDocument> {
    const newUser = new User({
      name,
      active,
      timeClasses,
      contact,
      externalData,
    });

    if (!newUser) throw new Error("User not created");

    await newUser.save();

    return newUser;
  }

  async deleteUserById(id: ObjectId) {
    if (!mongoose.Types.ObjectId.isValid(id.toString()))
      throw new Error("User ID not found for delete");
    const user = await User.findByIdAndDelete(id);
    return user;
  }

  async updateUserById(id: ObjectId, dados: IUser) {
    const user = await User.findByIdAndUpdate(id, dados, { new: true });
    return user;
  }

  async getUsers() {
    const users = await User.find({});
    return users;
  }
}
