import type { AppProps } from "next/app"

import "@gouvfr/dsfr/dist/dsfr.min.css"
import "@gouvfr/dsfr/dist/utility/utility.css"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="js/dsfr.module.min.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
