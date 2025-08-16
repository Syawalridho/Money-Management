export type Goal = {
  id: string;
  name: string;
  icon: string;       // emoji/text
  color: string;      // tailwind bg-* class
  current: number;    // jumlah terkumpul
  target: number;     // target akhir
  estimate: string;   // contoh: "12 bulan lagi"
  createdAt?: string; // opsional dari backend
  updatedAt?: string; // opsional dari backend
};
