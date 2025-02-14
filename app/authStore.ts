import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type User = {
    userId: string
    email: string
    name: string
    role: string
}

type AuthState = {
    token: string | null
    user: User | null
    isAuthenticated: boolean
    setAuth: (token: string, user: User) => void
    clearAuth: () => void
    checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            isAuthenticated: false,

            setAuth: (token, user) => set({
                token,
                user,
                isAuthenticated: true,
            }),

            clearAuth: () => set({
                token: null,
                user: null,
                isAuthenticated: false,
            }),

            checkAuth: async () => {
                try {
                    const response = await fetch('https://localhost:8081/api/v1/auth/status', {
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })

                    if (!response.ok) {
                        set({isAuthenticated: false, user: null, token: null})
                        return
                    }

                    const data = await response.json()
                    if (data.isAuthenticated) {
                        set({
                            isAuthenticated: true,
                            user: {
                                userId: data.userId,
                                email: data.email,
                                name: data.name,
                                role: data.role
                            }
                        })
                    }
                } catch (error) {
                    set({isAuthenticated: false, user: null, token: null})
                }
            }
        }),
        {
            name: 'auth-storage',
        }
    )
)