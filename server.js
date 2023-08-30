const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
require("./connection");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    // cors: "http://localhost:3000",
    cors: "https://idyllic-gaufre-afe0d9.netlify.app",
    methods: ["GET", "POST", "PATCH", "DELETE"]
})

const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const imageRoutes = require("./routes/imageRoutes");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/images", imageRoutes);

app.post("/create-payment", async(req, res) => {
    const {amount} = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'INR',
            payment_method_types: ['card']
        })
        res.status(200).json(paymentIntent);

    } catch(e) {
        res.status(400).json(e.message);
    }
})

server.listen(8080, () => {
    console.log("Server is running at port", 8080);
})

app.set("socketio", io);