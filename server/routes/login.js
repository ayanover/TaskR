require('dotenv').config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
try {
    console.log('Received login request');
    const { username, password } = req.body;

    if (!(await User.findOne({ username }))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    password.destroy();
    // Generate a JWT token for authentication
    const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
    });

    res.status(200).json({ token });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
}