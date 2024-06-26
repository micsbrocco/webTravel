import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(cors());

// Configuración de MongoDB Atlas
const MONGO_URI = 'mongodb+srv://admin21:1234@tpapi.1hb257e.mongodb.net/?retryWrites=true&w=majority&appName=tpApi';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
