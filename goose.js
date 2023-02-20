const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    age: Number
});

const User = mongoose.model("user", userScheme);


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/NodeDb");
     
    // const user = new User({ name: "Carl", age: 15});
    // await user.save();

    // const user = await User.create({ name: "Xerxus", age: 163});

    const Xerxus = await User.findOne({name: "Carl Smith"}).lean();
    console.log(Xerxus);
    // const result = await User.deleteMany({age:41});
    // const result = await User.deleteOne({name:"Tom"})
    // console.log(result);

    // const result = await User.updateOne({name: "Tom"}, {name: "Tom Smith"})
    
    const result = await User.findByIdAndUpdate(Xerxus._id, {name: "Xerxus"});
    // const user = await User.findOneAndUpdate({name: "Mike"}, {name: "Alex", age:24}, {new: true});

    console.log(result);

    // console.log("Сохранен объект", user);
 
    // отключаемся от базы данных
    await mongoose.disconnect();
}

main().catch(console.log).finally(async()=>await mongoose.disconnect());