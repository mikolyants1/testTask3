import {Outlet, createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Page from './components/page'
import Final from './components/final'

const router=createBrowserRouter([
    {
      path:'/',
      element:<Outlet />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:'page',
          element:<Page />
        },
        {
          path:'final',
          element:<Final />
        }
      ]
    },
  
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
