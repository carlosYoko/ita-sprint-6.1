import mongoose from "mongoose";

const mongoConnection = async (mongoUrl: string): Promise<void> => {
  try {
    mongoose.set("toJSON", {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
      }
    });

    await mongoose.connect(mongoUrl, {
      dbName: "dice_games"
    });

    console.log("Connection established with MongoDB");
  } catch (err) {
      console.error("An unknown error ocurred");
  }
};

export default mongoConnection;
