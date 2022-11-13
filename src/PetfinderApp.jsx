import { BrowserRouter } from 'react-router-dom'

import { UiProvider } from './context/ui'
import { AuthProvider } from './context/auth'
import { AppRouter } from './router'
import { PetProvider } from './context/pet'

export const PetfinderApp = () => {
  return (
    <UiProvider>
      <PetProvider>
        <AuthProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
        </AuthProvider>
      </PetProvider>
    </UiProvider>
  )
}
