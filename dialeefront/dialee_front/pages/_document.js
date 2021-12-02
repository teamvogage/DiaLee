import Document, {Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import {DOMAIN} from '../lib/constants'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    function handleCollectStyles(App) {
      return props => {
        return sheet.collectStyles(<App {...props} />);
      };
    }

    const page = renderPage(App => handleCollectStyles(App));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"/>
  
          </Head>
      
        <body onContextMenu={(e) => {console.log(e);e.preventDefault();return false;}}>
       
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}