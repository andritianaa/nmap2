import Jwt from "jsonwebtoken"
export const generateToken = (id, username) => {
    const payload = { id, username }
    const token = Jwt.sign(payload, process.env.SECRET, { expiresIn: "48h" })

    
return token
}