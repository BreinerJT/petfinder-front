import { Navigate, Routes, Route } from 'react-router-dom'
import { HomePage, ProfilePage } from '../pages'

export const PetfinderRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />

      <Route path='/*' element={<Navigate to='/' />} />

    </Routes>
  )
}
