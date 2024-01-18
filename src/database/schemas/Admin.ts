import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

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

Admin.pre('save', async function(next) {
  const hashPassword = await bcrypt.hash(this.password as string, 12);
  this.password = hashPassword;
  next();
})

export default mongoose.model('Admin', Admin);
