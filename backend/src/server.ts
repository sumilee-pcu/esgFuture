import express, { Application } from "express";
import cors from "cors";
import config from "./config";
import { errorHandler, notFound } from "./middleware/errorHandler";

// Import routes
import authRoutes from "./routes/authRoutes";
import paperRoutes from "./routes/paperRoutes";
import noticeRoutes from "./routes/noticeRoutes";

const app: Application = express();

// Middleware
app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/papers", paperRoutes);
app.use("/api/notices", noticeRoutes);

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// Start server
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║   Future Industry Convergence Society - Backend API      ║
║                                                           ║
║   Environment: ${config.nodeEnv.padEnd(45)}║
║   Port: ${PORT.toString().padEnd(51)}║
║   URL: http://localhost:${PORT.toString().padEnd(40)}║
║                                                           ║
║   API Documentation: http://localhost:${PORT}/api-docs${' '.padEnd(12)}║
╚═══════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  process.exit(0);
});

export default app;
