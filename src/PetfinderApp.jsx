import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/auth'
import { PetProvider } from './context/pet'
import { UiProvider } from './context/ui'

import { AppRouter } from './router'

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
