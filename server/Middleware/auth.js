import jwt from 'jsonwebtoken';

// How does the middleware work (in the case of liking)?:
// Click the like button (REQ) => 'auth' middleware to confirm/authenticate (RES) => (NEXT) => 'Like' controller...

const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization;
        console.log(token)
        // Custom token
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT);

            req.userId = decodedData?.id;

        // Google token - Greater than 500
        } else { 
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        
        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;