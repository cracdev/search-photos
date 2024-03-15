import React from 'react'
import { Frame } from "@/components"

export const Page404: React.FC = () => {
  return (
    <main className="flex flex-col gap-8">
        <Frame>
            <h1>404: The page you are looking for isn’t here</h1>
            <p> It looks like you've looking into a URL that doesn’t exist. Please use the navigation above to find your way back.</p>
            <a href="/">Back to Home</a>
        </Frame>
    </main>
  )
};