'use client'
 
import { useRouter } from 'next/navigation'
 
export default function UseRouter() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.prefetch('/about')}>
      Aboutへ遷移（useRouter使用）
    </button>
  )
}