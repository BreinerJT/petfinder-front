import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from '../components/ui'
import { AuthContext } from '../context/auth'
import { AuthRoutes, PetfinderRoutes } from './'

export const AppRouter = () => {
  const { logged, verificarToken, checking } = useContext(AuthContext)

  useEffect(() => {
    verificarToken()
  }, [verificarToken])

  if (checking) return <Loader />

  return (
    <>
      <Routes>
        {
          logged
            ? <Route path='/*' element={ <PetfinderRoutes /> } />
            : <Route path='/*' element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' /> } />

      </Routes>
    </>
  )
}
