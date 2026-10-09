// プランB サイト生成: node build.js  (style.css は ../site/style.css と同じ)
const fs = require('fs'), path = require('path');
const NAV = [['service', 'できること'], ['safety', '個人情報の守り方'], ['price', '料金(予定)'], ['company', '運営'], ['contact', 'ご相談']];
const page = (title, desc, cur, body) => `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="top"><div class="w">
<a class="logo" href="index.html">きろく<span>ラク</span></a>
<nav>${NAV.map(([k, t]) => `<a href="${k}.html"${k === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
</div></header>
${body}
<footer><div class="w">きろくラク(福祉・介護の書類づくり支援) 運営: 株式会社メディアビー ・ ただいま先行案内中です</div></footer>
</body>
</html>
`;
const out = (f, ...a) => fs.writeFileSync(path.join(__dirname, f), page(...a));

out('index.html', 'きろくラク | 福祉・介護の書類づくりを、軽く', '支援記録や報告書の下書きをAIがお手伝いします。職員が利用者さまと向き合う時間を増やすために。', 'home', `
<div class="hero"><div class="w">
<h1>書類に使う時間を減らして、<br>人と向き合う時間を増やす。</h1>
<p class="lead">職員のメモをもとに、支援記録や月次報告書の「下書き」をAIが作ります。内容の確認と提出は、必ず職員の方が行います。</p>
<a class="btn" href="contact.html">先行案内・ご相談はこちら</a><a class="btn sub" href="safety.html">個人情報の守り方</a>
<p class="mute" style="margin-top:18px">※ 現在は準備中です。サービス開始前に、現場の方のご意見を伺っています。</p>
</div></div>
<section><div class="w"><h2>現場のこんな声を、軽くしたい</h2><div class="grid">
<div class="card"><h3>記録に追われて残業</h3><p>日々の支援記録を書く時間が、勤務時間内に収まらない。</p></div>
<div class="card"><h3>月末の報告書がつらい</h3><p>月次の報告書づくりが、特定の人に集中している。</p></div>
<div class="card"><h3>人手が足りない</h3><p>書類のために、利用者さまと向き合う時間が削られてしまう。</p></div>
</div></div></section>
<section><div class="w"><h2>大切にしていること</h2>
<p>福祉・介護の現場は、地域を支える大切な仕事です。AIは職員の代わりに判断するものではありません。職員の方が、安心して・短い時間で書類を整えるための「下書きの道具」です。</p>
<div class="note">診断・ケアの判断・計画の決定は行いません。出力は必ず職員の方が確認・修正してお使いください。</div></div></section>`);

out('service.html', 'できること | きろくラク', 'きろくラクで予定している機能。', 'service', `
<section><div class="w"><h1 style="font-size:32px">できること(予定)</h1>
<p class="lead">まずは、次の2つに絞って、現場の方と一緒に作ります。</p>
<div class="grid">
<div class="card"><h3>支援記録の文章化</h3><p>箇条書きのメモを、事業所の書式に沿った文章の下書きにします。</p></div>
<div class="card"><h3>月次報告書の下書き</h3><p>1か月分のメモや記録から、報告書の下書きをまとめます。</p></div></div>
<h2 style="margin-top:34px">しないこと</h2>
<ul><li>診断・ケアの判断・支援計画の決定</li><li>職員の確認なしでの提出</li><li>利用者さまの実名・住所などの取り扱い(下書きは、イニシャルや番号で行う運用を前提にします)</li></ul>
<div class="note">現在は開発前の段階です。機能や時期は、ご相談の内容を伺って決めます。</div></div></section>`);

out('safety.html', '個人情報の守り方 | きろくラク', '利用者さまの情報を守るための考え方。', 'safety', `
<section><div class="w"><h1 style="font-size:32px">個人情報の守り方</h1>
<p class="lead">利用者さまの記録は、特に大切に扱うべき情報です。次の考え方を、サービス開始の条件にします。</p>
<div class="grid">
<div class="card"><h3>実名を入れない運用</h3><p>記録はイニシャルや番号で。実名・住所・連絡先などは、入力しない運用を基本にします。</p></div>
<div class="card"><h3>保管しない設計</h3><p>下書きを作ったら、当社側にはデータを残さない方向で設計します。</p></div>
<div class="card"><h3>送信先の明示</h3><p>AI事業者へ送る内容と条件を、ご契約前に書面でご説明します。</p></div>
<div class="card"><h3>専門家による確認</h3><p>個人情報保護の専門家の確認を受けてから、サービスを開始します。</p></div></div>
<div class="note" style="margin-top:20px">【公開前に確定する項目】保管の有無・期間、AI事業者との契約条件、事故が起きたときの連絡手順。確定するまで、このページの表現は仮です。</div></div></section>`);

out('price.html', '料金(予定) | きろくラク', '料金は予定です。', 'price', `
<section><div class="w"><h1 style="font-size:32px">料金(予定)</h1>
<table><tr><th>プラン</th><th>月額(税別・予定)</th><th>内容</th></tr>
<tr><td>先行ご相談</td><td>0円</td><td>現場のお困りごとを伺います。試作へのご意見をいただける事業所さまに、優先してご案内します。</td></tr>
<tr><td>スタンダード(予定)</td><td>30,000円</td><td>支援記録・月次報告書の下書き</td></tr>
<tr><td>拡大(予定)</td><td>50,000円</td><td>職員数が多い事業所向け</td></tr></table>
<p class="mute">サービス開始前のため、金額は変わることがあります。お支払いは、銀行振込(請求書払い)またはカード決済を予定しています。</p></div></section>`);

out('company.html', '運営 | きろくラク', '運営会社の概要。', 'company', `
<section><div class="w"><h1 style="font-size:32px">運営</h1>
<table><tr><th>運営会社</th><td>株式会社メディアビー</td></tr>
<tr><th>代表者</th><td>【代表者名を入れる】</td></tr>
<tr><th>所在地</th><td>【所在地を入れる】</td></tr>
<tr><th>連絡先</th><td>【メールアドレス/電話番号を入れる】</td></tr></table>
<p class="mute">【】の項目は、公開前に社長が入力します。</p></div></section>`);

out('contact.html', 'ご相談 | きろくラク', '先行案内・ご相談のお申し込み。', 'contact', `
<section><div class="w"><h1 style="font-size:32px">先行案内・ご相談</h1>
<p class="lead">現場のお困りごとを、15分ほどお聞かせください。利用者さまの個人情報は、お送りいただく必要はありません。</p>
<div class="note">このフォームはまだ送信先につながっていません(公開前に設定します)。</div>
<form onsubmit="event.preventDefault();alert('現在は準備中です。公開前に送信先を設定します。')">
<label for="n">事業所名</label><input id="n" autocomplete="organization">
<label for="p">ご担当者名</label><input id="p" autocomplete="name">
<label for="e">メールアドレス</label><input id="e" type="email" autocomplete="email">
<label for="m">お困りごと(個人情報は書かないでください)</label><textarea id="m" rows="4"></textarea>
<button class="btn" style="border:0;cursor:pointer;font:inherit;font-weight:700;margin-top:14px">送信する</button>
</form></div></section>`);
