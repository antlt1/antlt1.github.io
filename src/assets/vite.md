## 🚀 ReactJS + TypeScript + Vite + Alias (~) + React Router + Redux Toolkit Setup

## ✅ 1. Tạo project bằng Vite với template React + TypeScript
```bash
npm create vite@latest my-react-ts-app -- --template react-ts
cd my-react-ts-app
npm install
```

## ✅ 2. Cài thêm thư viện cần thiết
```bash
npm install react-router-dom @reduxjs/toolkit react-redux
```

## ✅ 3. Cấu hình alias ~ trong Vite

### - Cần cài thư viện vào trước để sài path
```cmd
 npm i path
```
> Thiết lập lại file 
🔧 vite.config.ts:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
```

## ✅ 4. Cấu trúc thư mục đề xuất
```plaintext
my-react-ts-app/
├── src/
│   ├── components/
│   │   └── Button.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── admin/
│   │       └── Dashboard.tsx
│   ├── store/
│   │   ├── index.ts     ← Tạo Redux store
│   │   └── counterSlice.ts ← Reducer demo
│   ├── router/
│   │   └── index.tsx
│   ├── App.tsx
│   ├── main.tsx
├── jsconfig.json
├── vite.config.ts
```

## ✅ 5. Thiết lập React Router
> 🔧 src/main.tsx:
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '~/App';
import store from '~/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

> 🔧 src/router/index.tsx:
```typescript
import Home from '~/pages/Home';
import About from '~/pages/About';
import Dashboard from '~/pages/admin/Dashboard';

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
];

export const privateRoutes = [
  { path: '/admin', element: <Dashboard /> },
];
```

## ✅ 6. App.tsx - Tích hợp Router
```typescript
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/router';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        {publicRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
```

## ✅ 7. jsconfig.json (hỗ trợ alias ~ cho VSCode)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

## ✅ 8. Cài SCSS Module (tuỳ chọn)
```bash
npm install -D sass
```
> 🔧 Button.tsx:
```typescript
import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return <button className={styles.primary}>Click me</button>;
};

export default Button;
```

## ✅ 9. Thiết lập Redux Store (store/index.ts)
```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## ✅ 10. Tạo Reducer cơ bản (counterSlice.ts)
```typescript
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

## ✅ 11. Sử dụng Redux trong component (Home.tsx)
```typescript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement } from '../features/counter/counterSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Giá trị counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
};

export default Home;

```