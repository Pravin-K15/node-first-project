const mongodb = require("mongodb");
const { connect } = require("./routes/shop");
const mongourl = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(mongourl);

async function getProductsData(){

    try {
        await client.connect();
        console.log("connection done");
        const db = client.db("tcsindia");
        const data = await db.collection("products").find().toArray();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

async function insertProducts(){

    try {
        await client.connect();
        console.log("connection done");
        const db = client.db("tcsindia");
        const data = await db.collection("products").insertOne({
            "name": "Kain",
            "price": 48,
            "description": "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
            "discount": 10,
            "rating": 10,
            "vendor": "Palmer College of Chiropractic"
          });
        console.log(data);
        const product = await db.collection("products").findOne({_id: mongodb.ObjectId(data.insertedId)})
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}

async function updateProducts(){

    try {
        await client.connect();
        console.log("connection done");
        const db = client.db("tcsindia");
        const data = await db.collection("products").updateOne({
            "name": "Kain"}, {
                $set: {"description": "nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor"}
            });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function deleteProducts(){

    try {
        await client.connect();
        console.log("connection done");
        const db = client.db("tcsindia");
        const data = await db.collection("products").deleteOne({
            "name": "Kain"});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

deleteProducts();
// updateProducts();
// insertProducts();
// getProductsData();