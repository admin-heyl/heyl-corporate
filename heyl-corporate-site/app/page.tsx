import { ArrowDown, Instagram, Send } from "lucide-react";

const navItems = ["ABOUT", "SERVICE", "NEWS", "COMPANY", "CONTACT"];

const scenes = [
  ["work", "働く時間"],
  ["school", "学校"],
  ["friends", "友達"],
  ["family", "家族"],
  ["alone", "一人の時間"]
];

const services = [
  ["学生向けサービス", "日々の学校生活や人間関係が、少しだけ前向きに見えるような体験を準備しています。"],
  ["感情に寄り添う体験設計", "効率だけでは拾いきれない不安や揺らぎに、静かに寄り添うプロダクトを設計します。"],
  ["生活者との共創", "ユーザー、企業、クリエイターとともに、生活の余白を豊かにする接点を育てます。"]
];

const companyRows = [
  ["会社名", "合同会社HEYL"],
  ["所在地", "〒251-0051 神奈川県藤沢市白旗1-12-31"],
  ["設立", "2024年3月"],
  ["代表", "尾島 久瑠美、瀬戸西 彩夏"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HEYL top">HEYL</a>
        <nav>
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </nav>
        <div className="social-links">
          <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={22} /></a>
          <a href="https://x.com/" aria-label="X">X</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-visual">
          <div className="life-scene muted" aria-hidden="true">
            {scenes.map(([className, label]) => <Scene className={className} label={label} key={className} />)}
          </div>
          <div className="color-layer" aria-hidden="true">
            <div className="life-scene warm">
              {scenes.map(([className, label]) => <Scene className={className} label={label} key={className} />)}
            </div>
          </div>
          <div className="hero-shade" />
          <div className="logo-draw" aria-label="HEYL">
            <svg viewBox="0 0 520 150" role="img">
              <title>HEYL</title>
              <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle">HEYL</text>
            </svg>
            <p>Help Enrich Your Life</p>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="ABOUTへ移動"><ArrowDown size={28} /></a>
      </section>

      <section className="section about" id="about">
        <SectionTitle title="ABOUT" />
        <div className="center-copy">
          <h2>Help Enrich Your Life - あなたの人生を豊かにするお手伝い -</h2>
          <p>
            このサービスがあることで、この会社で働くことで、少しだけ人生が豊かになる。
            HEYLは、そんな存在を目指しています。
          </p>
        </div>
      </section>

      <section className="section service" id="service">
        <SectionTitle title="SERVICE" />
        <div className="service-feature">
          <div className="coming-visual"><span>COMING SOON</span></div>
          <div className="service-list">
            {services.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section news" id="news">
        <SectionTitle title="NEWS" />
        <p className="no-content">No Content</p>
      </section>

      <section className="section company" id="company">
        <SectionTitle title="COMPANY" />
        <dl className="company-list">
          {companyRows.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </section>

      <section className="section contact" id="contact">
        <SectionTitle title="CONTACT" />
        <div className="contact-copy">
          <p>お問い合わせはこちらのフォームよりご連絡ください。</p>
          <p>通常2日以内に返信させていただいておりますが、稼働状況によりお時間をいただくこともございます。</p>
        </div>
        <form className="contact-form">
          <label>お名前 <span>*</span><input type="text" name="name" placeholder="田中太郎" required /></label>
          <label>メールアドレス <span>*</span><input type="email" name="email" placeholder="info@example.com" required /></label>
          <label>お問い合わせ内容 <span>*</span><textarea name="message" placeholder="お問い合わせ内容をご入力ください" required /></label>
          <label className="privacy-check"><input type="checkbox" required />プライバシーポリシーに同意する</label>
          <a className="privacy-link" href="#contact">プライバシーポリシーを確認する</a>
          <button type="submit"><Send size={18} />送信する</button>
        </form>
      </section>

      <footer className="site-footer">
        <a href="#top">PRIVACY POLICY</a><span>/</span><span>© 2026 合同会社HEYL. All rights reserved.</span><span className="footer-domain">heyl.co.jp</span>
      </footer>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <div className="section-title"><p>{title}</p><span aria-hidden="true" /></div>;
}

function Scene({ className, label }: { className: string; label: string }) {
  return (
    <div className={`scene ${className}`}>
      <div className="window" />
      <div className="desk" />
      <div className="person one"><span /></div>
      <div className="person two"><span /></div>
      <p>{label}</p>
    </div>
  );
}
