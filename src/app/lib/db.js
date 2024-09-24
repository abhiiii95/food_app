

const {user_name,password}= process.env

export const connectionURL = `mongodb+srv://${user_name}:${password}@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0`

