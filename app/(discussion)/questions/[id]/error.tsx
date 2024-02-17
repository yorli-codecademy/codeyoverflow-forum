'use client'
import Button from '../../../../components/button/Button'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <div>
      <h2>This user doesn't exist!</h2>
      <Button href="/" label="Return Home" />
      <Button onClick={goBack} label="Go Back" />
    </div>
  )
}
