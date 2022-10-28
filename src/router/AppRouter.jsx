import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes, PetfinderRoutes } from "."

export const AppRouter = () => {
  const isVerified = true

  return (
    <>
      <Routes>
        {
          isVerified
            ? <Route path='/*' element={ <PetfinderRoutes /> } />
            : <Route path='/*' element={ <AuthRoutes /> } />
        }
        
        <Route path='/*' element={ <Navigate to='/auth/login' /> } />        

      </Routes>
    </>
  )
}
