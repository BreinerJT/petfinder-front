import { Navigate, Routes, Route } from 'react-router-dom'
import { IndexPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={ <IndexPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />

    </Routes>
  )
}
