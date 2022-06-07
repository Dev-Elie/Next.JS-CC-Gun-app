import React from 'react'
import { useRouter } from 'next/router'

export default function Jumbotron() {

  const router = useRouter()

  return (
    <div class="jumbotron jumbotron-fluid mt-5 mb-5">
      <div class="container">
        <h1 class="display-4">Big Boy toys</h1>
        <p class="lead">It’s a great handling gun. I would recommend it to anyone who is interested in that style of pistol</p>
        <button type="button" class="btn btn-primary"
          onClick={() => router.push('/guns')}>Explore</button>
      </div>
    </div>
  )
}
