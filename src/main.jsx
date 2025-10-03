import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import Wishlist from './pages/Wishlist.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/wishlist", element: <Wishlist /> },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
