const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

const users = [{name: "Bob", age: 35} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];

async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        const db = mongoClient.db("NodeDb");
        const collection = db.collection("user");

        // const user = {name: "Tom", age: 27, gender: 1};
        // const result = await collection.insertOne(user);

        // const results = await collection.insertMany(users);

        // const results = await collection.find({name: "Tom"}).toArray();
        // const results = await collection.findOne({name: "Tom"});

        // const result = await collection.deleteOne({name: "Bob"});
        // const result = await collection.deleteMany({name: "Tom"});
        // const result = await collection.findOneAndDelete({age: 21});
        // const result = await db.dropDatabase();

        // const result = await collection.findOneAndUpdate({name: "Bob"}, { $set: {name: "Sam"}}, {returnDocument: "after"})
        // const result = await collection.updateMany({name:"Sam"}, { $set: {name: "Bob"}});
        const result = await collection.updateOne({name: "Tom"},{$set: {name: "Tom Junior", age: 33}});
        console.log(result);
        // взаимодействие с базой данных
    }catch(err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        await mongoClient.close();
    }
}
run().catch(console.log);