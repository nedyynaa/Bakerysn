import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware CORS (mencegah error CORS dari frontend)
app.use(cors({
  origin: '*', // mengizinkan semua domain/port frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Tipe Data
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface BakeryInfo {
  name: string;
  tagline: string;
  phone: string;
  instagram: string;
  address: string;
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
}

// Data Informasi Toko
const bakeryInfo: BakeryInfo = {
  name: "Bakery",
  tagline: "Roti segar setiap hari untuk kebahagiaan keluarga anda",
  phone: "+62 812-1215-1800",
  instagram: "@bakery.id",
  address: "Jl. Angkasa 12, Jakarta",
  operatingHours: {
    weekdays: "Senin - Sabtu: 06.00 - 12.00",
    sunday: "Minggu: 09.00 - 15.00"
  }
};

// Data Produk Sesuai Gambar Landing Page
const products: Product[] = [
  {
    id: 1,
    name: "Roti Cokelat",
    description: "Roti lembut dengan cokelat premium",
    price: 18000,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Roti Keju",
    description: "Roti gurih dengan taburan keju pilihan",
    price: 16000,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Roti Tawar Premium",
    description: "Lembut, empuk dan pas setiap waktu",
    price: 15000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Roti Sosis",
    description: "Perpaduan roti lembut dan sosis berkualitas",
    price: 17000,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80"
  }
];

// --- ENDPOINTS ---

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Server Bakery Backend Aktif!');
});

// Endpoint 1: Ambil Semua Produk
app.get('/api/products', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: products
  });
});

// Endpoint 2: Ambil Informasi Toko
app.get('/api/info', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: bakeryInfo
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});