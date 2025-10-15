"use client";

export default function MainBg() {
  return (
    <div className='fixed inset-0 z-[-1]'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{ backgroundImage: 'url("/assets/hero.jpg")' }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-my-bg/80' />
      {/* 
        bg-black/40 = black with 40% opacity
        Change to bg-my-overlay/50 or any Tailwind color you want 
      */}
    </div>
  );
}
