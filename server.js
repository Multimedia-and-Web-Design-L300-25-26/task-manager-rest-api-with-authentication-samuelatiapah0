import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB only in non-test environments
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});