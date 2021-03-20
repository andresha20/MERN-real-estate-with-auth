import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../Models/user.js';
import jwt from 'jsonwebtoken';

export const signinController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        
        if (!userExists) return res.status(400).json({ message: 'Could not find any user registered with that email address.'})

        const isPasswordCorrect = await bcrypt.compare(password, userExists.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.'})

        const token = jwt.sign({ email: userExists.email, id: userExists._id }, process.env.JWT, { expiresIn: '1h' });

        res.status(200).json({ result: userExists, token });
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong.'})
    }
}

export const signupController = async (req, res) => {
    const { firstName, surname, email, password, confirmPassword } = req.body;

    try {
        const userExists = await User.findOne({ email });
        
        if (userExists) return res.status(400).json({ message: 'This user is already registered.'});
        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({ name: `${firstName} ${surname}`, email, password: hashedPassword });
        const storeUser = newUser.save();
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT, { expiresIn: '1h' });

        res.status(200).json({ newUser, token });
        
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong.'})
    }
}

