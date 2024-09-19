import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
  name: string;
  active: boolean;
  timeClasses: number;
  contact: string;
  externalData: any;
}

export interface UserDocument extends Document {
  name: string;
  active: boolean;
  timeClasses: number;
  contact: string;
  externalData: any;
}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  active: { type: Boolean, required: true },
  timeClasses: { type: Number, required: true },
  contact: { type: String, required: true },
  externalData: { type: Schema.Types.Mixed, required: true },
});

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
