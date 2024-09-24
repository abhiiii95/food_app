

const { user_name, password } = process.env

// console.log(user_name, "Himani", password);

export const connectionURL = `mongodb+srv://${user_name}:${password}@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0`
// export const connectionURL = "mongodb+srv://himgan1611:Himani1611@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0"

