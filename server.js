const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config({ path: "routes/config.env" });

// mongodb connection
connectDB();

const app = express();

// middleware
app.use(express.json()); // to avoid error in parsing
app.use(moragan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));

app.use("/api/v1/admin", require("./routes/adminRoutes"));
// port

const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
