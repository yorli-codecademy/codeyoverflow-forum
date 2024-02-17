import React from 'react'
import Link from 'next/link'
import styles from './Post.module.css'

type PostProps = {
  post: {
    userId: number
    id: number
    title: string
    body: string
  }
}

export default function Post({ post: { userId, id, title, body } }: PostProps) {
  return (
    <div className={styles.container}>
      <Link href={`/questions/${id}`} >
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p>{body}</p>
      <small className={styles.info}>
        <Link href={`/users/${userId}`} >
          User: {userId}
        </Link>
      </small>
    </div>
  )
}
