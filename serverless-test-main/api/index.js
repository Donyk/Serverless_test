import { MongoClient } from "mongodb";

module.exports = async (req, res) => {
  const { name = "no name" } = req.query;
  const customers = await connectDb();
  const customer = await customers.findOneAndUpdate(
    { name },
    { $inc: { visits: 1 } },
    { upsert: true, returnNewDocument: true }
  );
  res.status(200).send(customer);
};

const connectDb = async () => {
  const client = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const database = client.db("test-db");
    const customers = database.collection("customers");
    return customers;
  } catch (e) {
    console.log(e)
  }
};
