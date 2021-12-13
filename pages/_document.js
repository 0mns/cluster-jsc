import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument(Document) {
  return (
    <Html dir="rtl" lang="dv">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
     
    </Html>
  );
}

export default MyDocument;
