# 伐採.com 独自ドメイン切り替え（2026/11/09 実施済み）
1. Cloudflare Pages の Custom domains に 伐採.com（xn--woq441c.com）を追加
2. index.html の canonical・og:url・og:image・構造化データの url を https://xn--woq441c.com/ に変更
3. robots.txt・sitemap.xml の URL を https://xn--woq441c.com/ に変更
4. bassai-com.pages.dev から 伐採.com へ 301 転送（Pages Functions の _middleware で Host 判定）
5. メール欄「準備中」を問い合わせ先に差し替え
6. Search Console・Bing に新しいドメインを登録しサイトマップ送信
