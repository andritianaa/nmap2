import "dotenv/config"

const config = {
    port: process.env.PORT,
    db: process.env.DB_URI
}

export default config