

const { User_name, Password } = process.env

// console.log(User_name, "Himani", Password);

export const connectionURL = `mongodb+srv://${User_name}:${Password}@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0`
// export const connectionURL = "mongodb+srv://himgan1611:Himani1611@cluster0.hiv0k.mongodb.net/Restro?retryWrites=true&w=majority&appName=Cluster0"

