import { Navigate, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages'

export const PetfinderRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />

      <Route path='/*' element={<Navigate to='/' />} />

    </Routes>
  )
}
