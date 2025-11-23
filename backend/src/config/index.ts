import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  databaseUrl: string;
  jwt: {
    secret: string;
    expiresIn: string;
    refreshSecret: string;
    refreshExpiresIn: string;
  };
  cors: {
    origin: string[];
  };
  email: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    password: string;
    from: string;
  };
  upload: {
    dir: string;
    maxFileSize: number;
    allowedTypes: string[];
  };
  payment: {
    toss: {
      clientKey: string;
      secretKey: string;
      successUrl: string;
      failUrl: string;
    };
  };
  urls: {
    frontend: string;
    submission: string;
  };
}

const config: Config = {
  port: parseInt(process.env.PORT || "4000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.DATABASE_URL || "",
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "your-refresh-secret",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  },
  cors: {
    origin: (process.env.CORS_ORIGIN || "http://localhost:3000").split(","),
  },
  email: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    password: process.env.SMTP_PASSWORD || "",
    from: process.env.EMAIL_FROM || "noreply@future-isa.or.kr",
  },
  upload: {
    dir: process.env.UPLOAD_DIR || "./uploads",
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE || "20971520", 10), // 20MB
    allowedTypes: (process.env.ALLOWED_FILE_TYPES || ".pdf,.docx,.doc").split(","),
  },
  payment: {
    toss: {
      clientKey: process.env.TOSS_CLIENT_KEY || "",
      secretKey: process.env.TOSS_SECRET_KEY || "",
      successUrl: process.env.TOSS_SUCCESS_URL || "http://localhost:3000/payment/success",
      failUrl: process.env.TOSS_FAIL_URL || "http://localhost:3000/payment/fail",
    },
  },
  urls: {
    frontend: process.env.FRONTEND_URL || "http://localhost:3000",
    submission: process.env.SUBMISSION_URL || "http://localhost:3001",
  },
};

export default config;
