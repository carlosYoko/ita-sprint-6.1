import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    userId: { type: Number, require: true }
});

const rollsSchema = new mongoose.Schema({
  dice1: { type: Number, require: true },
  dice2: { type: Number, require: true },
  isWin: { type: Boolean, require: true },
  userId: {type: Number, require: true }
})

const UserModel = mongoose.model('Users', userSchema);
const RollsModel = mongoose.model('Rolls', rollsSchema);
  
export { UserModel, RollsModel }