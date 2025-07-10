# Todo List App

Aplikasi Todo List yang elegan dan responsif dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Shadcn UI.

## ✨ Fitur

- ✅ **Tambah Todo** - Tambah todo baru dengan mudah
- ✏️ **Edit Todo** - Edit teks todo dengan double click atau tombol edit
- 🗑️ **Hapus Todo** - Hapus todo yang tidak diperlukan
- ☑️ **Toggle Status** - Tandai todo sebagai selesai/belum selesai
- 🔍 **Filter Todo** - Filter berdasarkan: Semua, Aktif, Selesai
- 📱 **Responsive Design** - Tampilan optimal di desktop dan mobile
- 🎨 **Animasi Halus** - Transisi dan animasi menggunakan Framer Motion
- 🌙 **Dark Mode Support** - Mendukung tema gelap dan terang

## 🛠️ Teknologi

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useCallback)

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── checkbox.tsx
│   │   └── badge.tsx
│   └── todo/               # Todo components
│       ├── TodoApp.tsx     # Main app component
│       ├── TodoForm.tsx    # Add todo form
│       ├── TodoList.tsx    # Todo list container
│       ├── TodoItem.tsx    # Individual todo item
│       ├── TodoFilter.tsx  # Filter controls
│       └── EmptyState.tsx  # Empty state component
├── hooks/
│   └── useTodos.ts         # Custom hook for todo management
├── types/
│   └── todo.ts             # TypeScript interfaces
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd todo-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📱 Cara Menggunakan

### Menambah Todo
1. Ketik teks todo di input field
2. Tekan Enter atau klik tombol "Tambah"

### Mengedit Todo
1. Klik tombol edit (ikon pensil) pada todo
2. Edit teks di input field yang muncul
3. Tekan Enter untuk menyimpan atau Escape untuk membatalkan

### Menandai Todo Selesai
1. Klik checkbox di sebelah kiri todo
2. Todo akan ditandai sebagai selesai dengan garis coret

### Menghapus Todo
1. Klik tombol hapus (ikon tempat sampah) pada todo
2. Todo akan dihapus dengan animasi

### Filter Todo
1. Gunakan tombol filter di bagian atas:
   - **Semua**: Menampilkan semua todo
   - **Aktif**: Hanya todo yang belum selesai
   - **Selesai**: Hanya todo yang sudah selesai

## 🎨 Desain

- **Minimalis & Elegan**: Desain clean dengan fokus pada fungsionalitas
- **Card Layout**: Setiap todo ditampilkan dalam card yang rapi
- **Smooth Transitions**: Animasi halus untuk semua interaksi
- **Mobile First**: Responsive design yang optimal di semua device
- **Accessibility**: Mendukung keyboard navigation dan screen readers

## 🔧 Customization

### Menambah Fitur Baru
1. Buat komponen baru di `src/components/todo/`
2. Update types di `src/types/todo.ts` jika diperlukan
3. Integrasikan dengan `useTodos` hook

### Mengubah Styling
1. Edit Tailwind classes di komponen
2. Update CSS variables di `src/app/globals.css`
3. Modifikasi Shadcn theme di `components.json`

## 📦 Build untuk Production

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

---

Dibuat dengan ❤️ menggunakan Next.js dan Shadcn UI
