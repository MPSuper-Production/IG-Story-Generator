import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const thumb = searchParams.get('thumb');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d0d0d',
          padding: '60px 40px',
        }}
      >
        {/* Scritta in alto */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: 80,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          NUOVO VIDEO
        </div>

        {/* Copertina YouTube al centro */}
        {thumb ? (
          <img
            src={thumb}
            style={{
              width: '1000px',
              height: '562px',
              borderRadius: 28,
              border: '4px solid rgba(255, 255, 255, 0.15)',
            }}
          />
        ) : (
          <div style={{ color: '#fff', fontSize: 32 }}>Nessuna miniatura fornita</div>
        )}
      </div>
    ),
    {
      width: 1080,
      height: 1920,
    }
  );
}
