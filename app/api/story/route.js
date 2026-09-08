import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
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
          backgroundColor: '#021305',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 70, 0.4) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(0, 255, 70, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          position: 'relative',
        }}
      >
        {/* Glow verde radiale al centro per effetto profondità */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1080px',
            height: '1920px',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 80, 0.15) 0%, rgba(0, 10, 2, 0.85) 75%)',
          }}
        />

        {/* Contenitore principale */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '60px 40px',
            zIndex: 10,
          }}
        >
          {/* Testo NUOVO VIDEO */}
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 75,
              letterSpacing: 4,
              textTransform: 'uppercase',
              WebkitTextStroke: '4px #000000',
              textShadow: '0 12px 28px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 255, 100, 0.4)',
            }}
          >
            NUOVO VIDEO
          </div>

          {/* Miniatura Video con Ombra */}
          {thumb ? (
            <img
              src={thumb}
              style={{
                width: '1000px',
                height: '562px',
                borderRadius: 26,
                border: '3px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.98), 0 10px 30px rgba(0, 0, 0, 0.8)',
              }}
            />
          ) : (
            <div style={{ color: '#fff', fontSize: 32 }}>Nessuna miniatura</div>
          )}
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1920,
    }
  );
}
