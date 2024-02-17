'use client'

import React, { useEffect, useState } from 'react'
import Button from '../../../../components/button/Button'
import { capitalize, fetchPostByTopic, Post } from '../../../../lib/utils'

export default function UserPage({ params }: { params: { topicId: string } }) {
  const topicId = params.topicId
  const [topicPosts, setTopicPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPostByTopic(topicId).then((fetchedPosts) => {
      setTopicPosts(fetchedPosts)
    })
  }, [topicId])

  return (
    <div>
      <h1>{capitalize(topicId)}</h1>
      <ul>
        {topicPosts.map((post) => (
          <li key={post.id}>
            <Button
              href={`/questions/${post.id}`}
              label={post.title}
            ></Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
