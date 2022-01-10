import { Schema } from 'mongoose';

const userSchema = new Schema({
  id: String,
  email: String,
  name: String,
  lastName: String,
  phone: String
  // language: 'es' | 'en';
});

export default userSchema;
