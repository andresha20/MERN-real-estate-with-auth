import HousePost from '../Models/housePost.js'
import mongoose from 'mongoose';

export const getPublishedHouses = async (req, res) => {
    try {
        const listOfHouses = await HousePost.find();
        res.status(200).json(listOfHouses);
    } catch (error) {
        console.log(error);
    }
}

export const postPublishHouse = async (req, res) => {
    const body = req.body;
    const newHousePost = new HousePost({ ...body, author: req.userId });

    try {
        await newHousePost.save();
        res.status(201).json(newHousePost);
    } catch (error) {
        console.log(error);
    }
}

export const patchPublishedHouse = async (req, res) => {
    const { id: _id } = req.params;
    // const _id = req.params.id;
    const body = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Unable to find a post with such ID.');
    }
    try {
        const updatedPost = await HousePost.findByIdAndUpdate(_id, {...body, _id }, {new: true});
        res.status(202).json(updatedPost);
        
    } catch (error) {
        console.log(error);
    }
}

export const deletePublishedHouse = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Unable to find a post to delete with such ID.')
    } else {
        try {
            await HousePost.findByIdAndRemove(_id);
            res.status(202).send(`Post with ID ${_id} deleted successfully.`)
            
        } catch (error) {
            console.log(error);
        }
    }

}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!req.userId) return res.status(403).json({ message: 'You must be registered to like this post.' });

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Unable to find a post to delete with such ID.')
    } else {
        try {
            const post = await HousePost.findById(_id);
            const index = post.favoriteCount.findIndex((id) => id === String(req.userId));

            if (index === -1) {
                post.favoriteCount.push(req.userId);
            } else {
                post.favoriteCount = post.favoriteCount.filter(id => id !== String(req.userId));
            }

            const updatedPost = await HousePost.findByIdAndUpdate(_id, post, { new: true });
            res.status(200).json(updatedPost);
        } catch (error) {
            console.log(error);
        }
    }

}