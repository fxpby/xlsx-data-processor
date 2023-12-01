import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './error-page'
import Processor from './routes/processor.jsx'
import Root from './routes/root'
import 'virtual:uno.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'part/:id',
          element: <Processor />,
        },
      ],
    },
  ],
  { basename: '/xlsx-processor' },
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
