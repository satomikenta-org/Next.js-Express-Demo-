import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(){
    return (
      <html>
        <Head>
          <title>Next.js Sample App</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
        <style jsx>{`
          body {
            margin: 0;
          }
        `}</style>
      </html>
    )
  }
}