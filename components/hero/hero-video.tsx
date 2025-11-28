export function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/portada.mp4" type="video/mp4" />
        <div className="w-full h-full bg-gradient-to-br from-adm-background via-adm-background to-adm-primary/20" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  )
}

