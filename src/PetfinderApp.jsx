import { BrowserRouter } from 'react-router-dom'

import { UiProvider } from './context/ui'
import { AuthProvider } from './context/auth'
import { AppRouter } from './router'

export const PetfinderApp = () => {
  return (
    <UiProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </UiProvider>
  )
}
