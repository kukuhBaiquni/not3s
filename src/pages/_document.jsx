import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' role='document'>
        <Head>
          <link href='/favicon.ico' rel='icon' />
          <link href='https://fonts.gstatic.com' rel='preconnect' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito&display=swap&family=Titillium+Web:wght@400;600&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
