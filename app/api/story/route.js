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
          backgroundColor: '#0a0a0a',
          padding: '60px 40px',
        }}
      >
        {/* Testo in alto con stroke e drop shadow */}
        <div
          style={{
            fontSize: 78,
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: 80,
            letterSpacing: 4,
            textTransform: 'uppercase',
            WebkitTextStroke: '3px #000000',
            textShadow: '0 12px 24px rgba(0, 0, 0, 0.85)',
          }}
        >
          NUOVO VIDEO
        </div>

        {/* Video Thumbnail con drop shadow marcata */}
        {thumb ? (
          <img
            src={thumb}
            style={{
              width: '1000px',
              height: '562px',
              borderRadius: 24,
              border: '3px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 10px 25px rgba(0, 0, 0, 0.75)',
            }}
          />
        ) : (
          <div style={{ color: '#fff', fontSize: 32 }}>Nessuna miniatura</div>
        )}
      </div>
    ),
    {
      width: 1080,
      height: 1920,
    }
  );
}
