import mongoose from 'mongoose';

const Admin = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowecase: true
  },
  password: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Admin', Admin);
