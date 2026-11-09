// 仮の住所(bassai-com.pages.dev)へのアクセスを本来のドメイン 伐採.com へ転送する
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'bassai-com.pages.dev' || url.hostname === 'www.xn--woq441c.com') {
    url.hostname = 'xn--woq441c.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
