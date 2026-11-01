# 伐採.com 公開時に切り替えること
1. index.html の `<meta name="robots" content="noindex">` を削除
2. robots.txt を次に置き換え:
   User-agent: *
   Allow: /
   Sitemap: https://xn--woq441c.com/sitemap.xml
3. メール欄「準備中」を問い合わせ先（フォームまたはアドレス）に差し替え
4. Cloudflare Pages の Custom domains に 伐採.com（xn--woq441c.com）を追加
5. Search Console・Bing にサイトマップを送信
