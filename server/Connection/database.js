import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const dbConnect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`Successfully connected to Mongodb: ${dbConnect.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnection;
