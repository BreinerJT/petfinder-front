import { BrowserRouter } from 'react-router-dom'
import { UiProvider } from './context/ui/UiProvider'

import { AppRouter } from "./router/AppRouter"

export const PetfinderApp = () => {
  return (
    <UiProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UiProvider>
  )
}
