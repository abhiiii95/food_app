

const {username,password}= process.env

export const connectionURL = `mongodb+srv://${username}:${password}@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0`

