import { AuthProvider } from './context/auth'
import { ChatProvider } from './context/chat'
import { PetProvider } from './context/pet'
import { SocketProvider } from './context/socket'
import { UiProvider } from './context/ui'

import { AppRouter } from './router'

export const PetfinderApp = () => {
  return (
    <UiProvider>
      <PetProvider>
        <ChatProvider>
          <AuthProvider>
            <SocketProvider>
              <AppRouter />
            </SocketProvider>
          </AuthProvider>
        </ChatProvider>
      </PetProvider>
    </UiProvider>
  )
}
