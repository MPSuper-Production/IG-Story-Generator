import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const thumb = searchParams.get('thumb');

  // Caricamento dinamico del font Montserrat ExtraBold/Black (peso 900 nativo)
  const fontData = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-900-normal.woff'
  ).then((res) => res.arrayBuffer());

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
          backgroundColor: '#012004',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 65, 0.65) 3px, transparent 3px),
            linear-gradient(to bottom, rgba(0, 255, 65, 0.65) 3px, transparent 3px)
          `,
          backgroundSize: '54px 54px',
          position: 'relative',
        }}
      >
        {/* Luce diffusa centrale */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1080px',
            height: '1920px',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 75, 0.28) 0%, rgba(0, 40, 10, 0.35) 100%)',
          }}
        />

        {/* Contenuto */}
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
          {/* Testo in Black/Heavy con bordo nero pieno e drop shadow */}
          <div
            style={{
              fontFamily: 'Montserrat',
              fontSize: 88,
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: 75,
              letterSpacing: 2,
              textTransform: 'uppercase',
              textShadow: `
                -5px -5px 0 #000000,
                 5px -5px 0 #000000,
                -5px  5px 0 #000000,
                 5px  5px 0 #000000,
                 0px  6px 0 #000000,
                 0px -6px 0 #000000,
                -6px  0px 0 #000000,
                 6px  0px 0 #000000,
                 0 15px 25px rgba(0, 0, 0, 0.95),
                 0 25px 45px rgba(0, 0, 0, 0.85)
              `,
            }}
          >
            NUOVO VIDEO
          </div>

          {/* Miniatura con Drop Shadow marcata */}
          {thumb ? (
            <img
              src={thumb}
              style={{
                width: '1000px',
                height: '562px',
                borderRadius: 24,
                border: '3px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.98), 0 12px 30px rgba(0, 0, 0, 0.85)',
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
      fonts: [
        {
          name: 'Montserrat',
          data: fontData,
          style: 'normal',
          weight: 900,
        },
      ],
    }
  );
}
