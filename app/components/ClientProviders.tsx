'use client';

import { GlowCursor } from './GlowCursor';
import { ParticlesBackground } from './ParticlesBackground';

export const ClientProviders = () => {
  return (
    <>
      <GlowCursor />
      <ParticlesBackground />
    </>
  );
}; 