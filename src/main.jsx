import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home'
import MEals from './components/Meals/MEals'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>No Meals in this stack</h1>,
    children: [
      {
        path: "/meals",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b'),
        element: <MEals></MEals>
      },
      {
        path: "/meals/:id",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.id}`),
        element: <MEals></MEals>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
