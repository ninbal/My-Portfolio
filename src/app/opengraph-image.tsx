import { ImageResponse } from 'next/og';
export const alt = 'Janine Ubal — Full-Stack Software Engineer, Cebu, Philippines';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#0B0D12', padding: 90, color: '#F5F5F8' }}><div style={{ display: 'flex', fontSize: 25, color: '#9296A6', marginBottom: 50 }}>JU. / CEBU, PHILIPPINES</div><div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -5 }}>Hi, I’m Janine.</div><div style={{ display: 'flex', fontSize: 48, color: '#8B7CF6', marginTop: 20 }}>Full-Stack Software Engineer.</div><div style={{ display: 'flex', fontSize: 22, color: '#9296A6', marginTop: 55 }}>React · Next.js · TypeScript · Enterprise web applications</div></div>, size);
}
