import { BrowserRouter } from 'react-router-dom'

import { UiProvider } from './context/ui'
import { AppRouter } from './router'

export const PetfinderApp = () => {
  return (
    <UiProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UiProvider>
  )
}
