export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('v');

  if (!id) {
    return new Response('Missing video ID', { status: 400 });
  }

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Apertura YouTube...</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    const id = "${id}";
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      window.location.href = "vnd.youtube://" + id;
    } else if (isAndroid) {
      window.location.href = "intent://www.youtube.com/watch?v=" + id + "#Intent;package=com.google.android.youtube;scheme=https;end";
    }

    setTimeout(function() {
      window.location.href = "https://www.youtube.com/watch?v=" + id;
    }, 600);
  </script>
</head>
<body style="background:#0a0a0a;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;margin:0;">
  <p>Apertura nell'app YouTube in corso...</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
