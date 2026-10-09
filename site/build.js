// サイト生成: node build.js  (site/ に各HTMLを書き出す)
const fs = require('fs'), path = require('path');
const NAV = [['service', 'サービス'], ['price', '料金'], ['security', '安心への取り組み'], ['faq', 'よくある質問'], ['company', '会社概要'], ['contact', 'お問い合わせ']];

const page = (file, title, desc, cur, body) => `<!doctype html>
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
<a class="logo" href="index.html">ぴた<span>チェック</span></a>
<nav>${NAV.map(([k, t]) => `<a href="${k}.html"${k === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
</div></header>
${body}
<footer><div class="w">ぴたチェック(請求書突合代行) 運営: 株式会社メディアビー ・ <a href="company.html">会社概要</a> ・ <a href="security.html">データの取り扱い</a> ・ <a href="tokushoho.html">特定商取引法に基づく表記</a> ・ <a href="terms.html">利用規約</a> ・ <a href="privacy.html">プライバシーポリシー</a></div></footer>
</body>
</html>
`;
const out = (f, ...a) => fs.writeFileSync(path.join(__dirname, f), page(f, ...a));

out('index.html', 'ぴたチェック | 請求書の突合を、AIが代行します',
  '取引先の請求書を発注データと突き合わせ、1円単位の差異や二重請求を見つけます。初月10件まで無料。', 'home', `
<div class="hero"><div class="w">
<h1>請求書の「1円のズレ」も<br>「二重請求」も、見逃さない。</h1>
<p class="lead">取引先から届く請求書を、発注データとAIが突き合わせます。間違いの疑いがある行だけを一覧にして、経理の確認時間を減らします。</p>
<a class="btn" href="contact.html">初月10件まで無料で試す</a><a class="btn sub" href="service.html">サービスを見る</a>
</div></div>
<section><div class="w"><h2>こんなお悩みに</h2><div class="grid">
<div class="card"><h3>月末に確認が集中する</h3><p>請求書と発注書を目で1行ずつ照合していて、毎月時間がかかる。</p></div>
<div class="card"><h3>単価違いに後で気づく</h3><p>支払ったあとで、発注時の単価と違っていたと分かる。</p></div>
<div class="card"><h3>二重請求が心配</h3><p>同じ納品が2回請求されても、忙しいと見落としてしまう。</p></div>
</div></div></section>
<section><div class="w"><h2>ご利用の流れ</h2><div class="steps">
<div class="card"><h3>発注データと請求書をお預かり</h3><p>Excel・CSVで構いません。まずは1〜2枚の無料お試しから。</p></div>
<div class="card"><h3>AIが突き合わせ</h3><p>単価・数量・金額・消費税の端数まで、1円単位で照合します。</p></div>
<div class="card"><h3>「差異あり」の行だけをご報告</h3><p>理由つきの一覧でお返しします。支払いの最終判断は御社の担当者さまです。</p></div>
</div></div></section>
<section><div class="w"><h2>私たちが大切にしていること</h2>
<p>地方の中小企業では、経理を兼任の少人数で回していることが多く、月末の確認作業が大きな負担になっています。ぴたチェックは、その「確認の手間」と「見落としの不安」を減らし、本来の仕事や大切な人との時間に使える余白を増やすことを目指します。</p>
<p class="mute">AIは人の仕事を奪うためではなく、人が安心して判断するために使います。</p></div></section>
<section><div class="w"><div class="note">判断できないもの(商品コードが不明、単位が違う など)は、推測で「一致」にせず「要確認」として人にお返しします。</div></div></section>`);

out('service.html', 'サービス | ぴたチェック', 'ぴたチェックが見つけられる請求書の間違いと、対応しているデータ形式。', 'service', `
<section><div class="w"><h1 style="font-size:32px">サービス内容</h1>
<p class="lead">請求書と発注データの照合を代行し、疑いのある行を理由つきでご報告します。</p>
<h2>見つけられる間違い</h2>
<table><tr><th>種類</th><th>例</th></tr>
<tr><td>単価の違い</td><td>発注 18円 → 請求 20円</td></tr>
<tr><td>二重請求・数量超過</td><td>発注 50個に対し 100個分を請求</td></tr>
<tr><td>キャンセル済みの請求</td><td>取り消した発注が請求に載っている</td></tr>
<tr><td>計算違い・端数</td><td>切り捨てのはずが四捨五入で1円ずれる / 消費税の計算違い</td></tr>
<tr><td>同じ請求書の重複</td><td>同じ請求書番号を2回受け取っている</td></tr></table>
<h2 style="margin-top:34px">対応しているデータ</h2>
<ul><li>発注データ: CSV(見出し名が違っても、多くの形式に対応します。読めない場合はお知らせします)</li>
<li>請求書: Excel(.xlsx / .xls)・CSV</li>
<li>PDFの請求書: 準備中です。対応時期が決まりしだいお知らせします。</li></ul>
<div class="note">AIが示すのは「疑い」です。最終的な支払い判断は、御社の担当者さまが行います。</div>
</div></section>`);

out('price.html', '料金 | ぴたチェック', 'お試し無料、月額5万円、月額10万円の3プラン。', 'price', `
<section><div class="w"><h1 style="font-size:32px">料金</h1>
<table><tr><th>プラン</th><th>月額(税別)</th><th>内容</th></tr>
<tr><td>お試し</td><td>0円(初月)</td><td>請求書10件まで。実際のデータでお試しいただけます。</td></tr>
<tr><td>スタンダード</td><td>50,000円</td><td>月200件まで</td></tr>
<tr><td>プロ</td><td>100,000円</td><td>件数無制限 + 月次レポート</td></tr></table>
<p class="mute">料金は予定です。ご契約前に、内容と金額を書面でご提示します。無理な勧誘や、自動での有料切り替えは行いません。</p>
<h2 style="margin-top:34px">お支払い方法</h2><table><tr><th>方法</th><th>内容</th></tr><tr><td>銀行振込</td><td>月末締め、翌月末までにお振込み(請求書を発行します)。振込手数料はお客様のご負担です。</td></tr><tr><td>クレジットカード(準備中)</td><td>ネット決済サービスの準備ができしだい、ご利用いただけます。</td></tr></table><p class="mute">無料お試しでは、お支払い情報のご入力は不要です。</p><a class="btn" href="contact.html">無料で試す</a></div></section>`);

out('security.html', '安心への取り組み | ぴたチェック', 'お預かりするデータの取り扱いについて。', 'security', `
<section><div class="w"><h1 style="font-size:32px">安心への取り組み</h1>
<p class="lead">請求書や発注データは、御社の大切な情報です。</p>
<div class="grid">
<div class="card"><h3>最終判断は人が</h3><p>AIは疑いのある行を挙げるだけ。支払いの可否は御社で決めます。</p></div>
<div class="card"><h3>契約前に書面で説明</h3><p>データの保管場所・保管期間・削除方法を、ご契約前に書面でご説明します。</p></div>
<div class="card"><h3>まず少量で</h3><p>お試しは1〜2枚から。ご納得いただけてから、本格的にご利用ください。</p></div></div>
<div class="note" style="margin-top:20px">【公開前に確定する項目】データの保管場所、保管期間、削除手順、AI事業者へのデータ送信の有無と条件。確定するまで、このページの表現は仮です。</div>
</div></section>`);

out('faq.html', 'よくある質問 | ぴたチェック', '請求書チェック代行についてのよくある質問。', 'faq', `
<section><div class="w"><h1 style="font-size:32px">よくある質問</h1>
<details><summary>AIが間違えることはありますか?</summary><p>あります。そのため、断定せず「疑いのある行」と理由をお示しし、判断できないものは「要確認」にします。最終確認は御社の担当者さまです。</p></details>
<details><summary>うちの発注データの形式でも使えますか?</summary><p>多くのCSV形式に対応しています。読めない場合は、その旨をお伝えし、対応できるかをご相談します。</p></details>
<details><summary>PDFの請求書は使えますか?</summary><p>現在は準備中です。ExcelまたはCSVでお願いしています。</p></details>
<details><summary>無料のあとに、自動で有料になりますか?</summary><p>なりません。有料プランは、ご納得いただいたうえで書面でお申し込みいただきます。</p></details>
<details><summary>途中でやめられますか?</summary><p>契約条件は、ご契約前に書面でご提示します。</p></details>
</div></section>`);

out('company.html', '会社概要 | ぴたチェック', '運営会社の概要。', 'company', `
<section><div class="w"><h1 style="font-size:32px">会社概要</h1>
<table><tr><th>運営会社</th><td>株式会社メディアビー</td></tr>
<tr><th>代表者</th><td>【代表者名を入れる】</td></tr>
<tr><th>所在地</th><td>【所在地を入れる】</td></tr>
<tr><th>事業内容</th><td>請求書突合代行サービス「ぴたチェック」の運営 ほか</td></tr>
<tr><th>連絡先</th><td>【メールアドレス/電話番号を入れる】</td></tr></table>
<p class="mute">【】の項目は、公開前に社長が入力します。</p></div></section>`);

out('contact.html', 'お問い合わせ | ぴたチェック', '無料お試し・15分のオンライン説明のお申し込み。', 'contact', `
<section><div class="w"><h1 style="font-size:32px">お問い合わせ・無料お試し</h1>
<p class="lead">15分のオンライン説明、または初月10件までの無料お試しをお申し込みいただけます。</p>
<div class="note">このフォームはまだ送信先につながっていません(公開前に、送信先のメールまたはフォームサービスを設定します)。</div>
<form onsubmit="event.preventDefault();alert('現在は準備中です。公開前に送信先を設定します。')">
<label for="n">会社名</label><input id="n" autocomplete="organization">
<label for="p">ご担当者名</label><input id="p" autocomplete="name">
<label for="e">メールアドレス</label><input id="e" type="email" autocomplete="email">
<label for="k">ご希望</label><select id="k"><option>無料お試し</option><option>15分のオンライン説明</option><option>その他</option></select>
<label for="m">ご質問など</label><textarea id="m" rows="4"></textarea>
<p class="mute">いただいた情報は、お問い合わせへの返信の目的にのみ使用します。</p>
<button class="btn" style="border:0;cursor:pointer;font:inherit;font-weight:700;margin-top:10px">送信する</button>
</form></div></section>`);

const D = '<div class="note">【下書き】公開前に、内容の確認と、必要に応じて専門家(弁護士・税理士など)による確認を行います。【】は社長が入力します。</div>';
out('tokushoho.html', '特定商取引法に基づく表記 | ぴたチェック', '特定商取引法に基づく表記(下書き)。', 'x', `
<section><div class="w"><h1 style="font-size:32px">特定商取引法に基づく表記</h1>${D}
<table style="margin-top:16px">
<tr><th>販売事業者</th><td>株式会社メディアビー</td></tr>
<tr><th>運営責任者</th><td>【代表者名】</td></tr>
<tr><th>所在地</th><td>【所在地】</td></tr>
<tr><th>連絡先</th><td>【電話番号・メールアドレス】</td></tr>
<tr><th>販売価格</th><td>料金ページに記載(税別)。消費税は別途申し受けます。</td></tr>
<tr><th>代金の支払い時期・方法</th><td>月末締め、翌月末までに銀行振込。クレジットカードは準備中。</td></tr>
<tr><th>サービスの提供時期</th><td>ご契約後、データをお預かりしてから【○営業日】以内に結果をお返しします。</td></tr>
<tr><th>解約・返金</th><td>【解約の条件(例: 月末までに申し出れば翌月から停止)と、返金の取り扱いを入力】</td></tr>
</table></div></section>`);

out('terms.html', '利用規約 | ぴたチェック', '利用規約(下書き)。', 'x', `
<section><div class="w"><h1 style="font-size:32px">利用規約</h1>${D}
<h3 style="margin-top:20px">第1条 サービスの内容</h3><p>当社は、お客様から提供された発注データと請求書を突き合わせ、差異の疑いがある箇所をご報告します。</p>
<h3 style="margin-top:20px">第2条 結果の位置づけ</h3><p>ご報告は、人による確認を助ける参考情報です。支払い・請求に関する最終的な判断と責任は、お客様にあります。当社は結果の完全性・正確性を保証しません。</p>
<h3 style="margin-top:20px">第3条 お預かりするデータ</h3><p>当社は、お預かりしたデータを、本サービスの提供の目的にのみ利用します。保管・削除の方法は、ご契約時に書面でお示しします。</p>
<h3 style="margin-top:20px">第4条 料金と支払い</h3><p>料金と支払い方法は、料金ページおよびご契約時の書面によります。</p>
<h3 style="margin-top:20px">第5条 責任の範囲</h3><p>【損害賠償の範囲・上限を専門家と相談のうえ入力】</p>
<h3 style="margin-top:20px">第6条 解約</h3><p>【解約の条件を入力】</p>
</div></section>`);

out('privacy.html', 'プライバシーポリシー | ぴたチェック', 'プライバシーポリシー(下書き)。', 'x', `
<section><div class="w"><h1 style="font-size:32px">プライバシーポリシー</h1>${D}
<h3 style="margin-top:20px">取得する情報</h3><p>お問い合わせ時の会社名・ご担当者名・メールアドレス、および、サービス提供のためにお預かりする発注データ・請求書。</p>
<h3 style="margin-top:20px">利用目的</h3><p>お問い合わせへの返信、サービスの提供、ご契約・請求に関する連絡。</p>
<h3 style="margin-top:20px">第三者への提供・委託</h3><p>【AI事業者・決済サービスなど、データや情報を委託する先と、その内容を入力】法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>
<h3 style="margin-top:20px">保管と削除</h3><p>【保管場所・保管期間・削除の手順を入力】</p>
<h3 style="margin-top:20px">お問い合わせ窓口</h3><p>【連絡先を入力】</p>
</div></section>`);
