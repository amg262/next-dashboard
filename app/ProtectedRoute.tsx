// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { useAuthStore } from '@/app/authStore'
//
// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//     const router = useRouter()
//     const { isAuthenticated, checkAuth } = useAuthStore()
//
//     useEffect(() => {
//         checkAuth()
//         if (!isAuthenticated) {
//             router.push('/login')
//         }
//     }, [isAuthenticated, router, checkAuth])
//
//     if (!isAuthenticated) {
//         return null
//     }
//
//     return <>{children}</>
// }