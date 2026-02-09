# My Portfolio

Portfolio website với thiết kế tối giản, lấy cảm hứng từ giao diện GIS/Map với các hiệu ứng animation


## Cài đặt

```bash
# Cài đặt dependencies
npm install
```

## Cách sử dụng

### Development

Chạy development server:

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Build

Tạo production build:

```bash
npm run build
```

### Preview

Xem preview của production build:

```bash
npm run preview
```

### Linting & Formatting

```bash
# Kiểm tra lỗi lint
npm run lint

# Tự động sửa lỗi lint
npm run lint:fix

# Format code
npm run format

# Kiểm tra format
npm run format:check
```

## Cấu trúc dự án

```
src/
├── components/          # React components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── ui/             # UI components
├── config/             # Configuration files
│   ├── information/    # Text content configs
│   └── animations/     # Animation parameters
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## Chỉnh sửa nội dung

Tất cả nội dung text và animation parameters được quản lý trong thư mục `src/config/`:

- **Nội dung text**: Chỉnh sửa các file trong `src/config/information/`
- **Animation parameters**: Chỉnh sửa các file trong `src/config/animations/`

Xem chi tiết tại [src/config/README.md](src/config/README.md)
