import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './routes/route.js'; 
import authroutes from './routes/authroutes.js';
import { connectdb } from "./lib/db.js";
import messageroutes from "./routes/messageroutes.js"

const app = express();

// ✅ Fix: Proper CORS Configuration
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend origin
    credentials: true, // Allow cookies/sessions
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow common methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow headers
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Fix: Explicitly Handle Preflight Requests
app.options("*", cors());

// Routes
app.use('/', route);
app.use("/api/auth", authroutes);
app.use("/api/message", messageroutes);


const PORT = 8001;

// ✅ Ensure DB Connection Before Starting Server
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error("❌ Failed to connect to MongoDB:", error);
});
