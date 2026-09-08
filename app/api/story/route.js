import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const thumb = searchParams.get('thumb');

  // Recupera l'URL base del dominio (es. https://ig-story-generator-nu.vercel.app)
  const host = req.headers.get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const bgUrl = `${protocol}://${host}/Back_ig.jpg`;

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
          backgroundColor: '#050d05',
          position: 'relative',
        }}
      >
        {/* Sfondo Grid Verde */}
        <img
          src={bgUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1080px',
            height: '1920px',
            objectFit: 'cover',
          }}
        />

        {/* Contenuto sopra lo sfondo */}
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
          {/* Testo NUOVO VIDEO con Stroke e Ombra */}
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 70,
              letterSpacing: 4,
              textTransform: 'uppercase',
              WebkitTextStroke: '4px #000000',
              textShadow: '0 10px 25px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 255, 100, 0.3)',
            }}
          >
            NUOVO VIDEO
          </div>

          {/* Miniatura Video con Drop Shadow */}
          {thumb ? (
            <img
              src={thumb}
              style={{
                width: '1000px',
                height: '562px',
                borderRadius: 24,
                border: '3px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.95), 0 10px 30px rgba(0, 0, 0, 0.8)',
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
