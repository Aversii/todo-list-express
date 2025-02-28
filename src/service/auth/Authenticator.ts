import * as jwt from "jsonwebtoken";

class Authenticator {
    generateToken = (payload: any): string => {
        const jwtKey = process.env.JWT_KEY as string;
        const jwtExpiresIn = process.env.JWT_EXPIRES_IN as string;

        if (!jwtKey) {
            throw new Error("JWT_KEY is not defined");
        }

        if (!jwtExpiresIn) {
            throw new Error("JWT_EXPIRES_IN is not defined");
        }

        const expiresIn = isNaN(Number(jwtExpiresIn)) ? jwtExpiresIn : Number(jwtExpiresIn);

        const token = jwt.sign(
            payload,
            jwtKey,
            { expiresIn } as jwt.SignOptions
        );

        return token;
    };

    getTokenData = (token: string) => {
        const jwtKey = process.env.JWT_KEY as string;

        if (!jwtKey) {
            throw new Error("JWT_KEY is not defined");
        }

        const result = jwt.verify(
            token,
            jwtKey
        );

        return result;
    };
}

export default new Authenticator();
