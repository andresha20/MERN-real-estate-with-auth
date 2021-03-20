import mongoose from 'mongoose';

const housePost = new mongoose.Schema ({
    title: String,
    author: String,
    name: String,
    content: String,
    price: {
        type: Number,
        default: 0
    },
    selectedFiles: Array,
    createdAt: {
        type: Number,
        default: new Date()
    },
    favoriteCount: {
        type: [String],
        default: []
    },
    details: {
        bedrooms: Number,
        bathrooms: Number,
        socialClass: Number,
    }
})

const HousePost = mongoose.model('House Post', housePost);

export default HousePost;