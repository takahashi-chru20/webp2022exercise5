function Header() {
  return (
    <header className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">横浜の観光スポット!</h1>
        </div>
      </div>
    </header>
  );
}

function Image() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
        
        </figure>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
        ・横浜中華街
        </p>
        <p>中華街駅からすぐのところにある横浜中華街は600店以上の店舗がある日本最大の中華街である。</p>
        <p>赤い提灯が路地に連なっており、夜に行くとオリエンタルな映えスポットにもなる。</p>
        <p>お手頃価格な食べ歩きや食べ放題なども沢山あるためかなりオススメ!</p>
        <p>～地図挿入予定～</p>
        <p>・横浜・八景島シーパラダイス</p>
        <p>様々な種類の水族館が集まるアクアリゾーツ、ジェットコースターなど沢山のアトラクションが集まるプレジャーランドなどがある。
        </p>
        <p>島内にはレストランやショッピングなども充実しており、一日中楽しむことができる。</p>
        <p>シーサイドラインがあるため、アクセスも簡単である。</p>
        <p>～地図挿入予定～</p>
        <p>・横浜ランドマークタワー</p>
        <p>桜木町駅やみなとみらい駅からすぐの位置にある横浜のシンボル的存在である。</p>
        <p>170店舗ほどの専門店が各フロアに並んでいるため、ショッピングや食事にも便利である。</p>
        <p>また、周辺にはホテルが多く位置していて、尚且つレストランは夜10時まで空いているため、夕食をホテルの近場で済ませることもできる。</p>
        <p>～地図挿入予定～</p>
        <p><p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p></p>
        <p>
        </p>
        
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;