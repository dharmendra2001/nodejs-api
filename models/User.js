// Required modules
import mongoose from 'mongoose';

// create User schema
const User = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}));

export default User;