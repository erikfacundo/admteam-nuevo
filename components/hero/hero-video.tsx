"use client"

import { useState, useEffect } from "react"

export function HeroVideo() {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoaded(true))
      video.addEventListener('error', () => setVideoError(true))
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/video/portada.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-adm-background via-adm-background to-adm-primary/20" />
      )}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-adm-background via-adm-background to-adm-primary/20 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  )
}

