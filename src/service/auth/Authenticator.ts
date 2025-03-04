import * as jwt from "jsonwebtoken";

interface AuthPayload extends jwt.JwtPayload {
    id: string;
}

class Authenticator {
    generateToken = (payload: AuthPayload): string => {
        const jwtKey = process.env.JWT_KEY;
        const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

        if (!jwtKey) {
            throw new Error("JWT_KEY is not defined");
        }

        if (!jwtExpiresIn) {
            throw new Error("JWT_EXPIRES_IN is not defined");
        }

        const expiresIn = isNaN(Number(jwtExpiresIn)) ? jwtExpiresIn : Number(jwtExpiresIn);

        return jwt.sign(payload, jwtKey);
    };

    getTokenData = (token: string): AuthPayload => {
        const jwtKey = process.env.JWT_KEY;

        if (!jwtKey) {
            throw new Error("JWT_KEY is not defined");
        }

        try {
            const result = jwt.verify(token, jwtKey) as AuthPayload;
            
            if (!result.id) {
                throw new Error("Invalid token payload");
            }

            return result;
        } catch (error) {
            throw new Error("Invalid token");
        }
    };
}

export default new Authenticator();
