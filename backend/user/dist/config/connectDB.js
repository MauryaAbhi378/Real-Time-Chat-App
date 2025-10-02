import mongoose from "mongoose";
const connectDB = async () => {
    const url = process.env.MONGO_URI;
    if (!url) {
        throw new Error("MONGO_URI is not defined in environment variable");
    }
    try {
        await mongoose.connect(url, {
            dbName: "chatapp"
        });
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log("Failed to connect to MongoDB", err);
        process.exit(1); //Stops the Node.js application immediately with an error code 1.
    }
};
export default connectDB;
//# sourceMappingURL=connectDB.js.map