import '../styles/globals.css'
import variables from '../styles/variables.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
  )
}