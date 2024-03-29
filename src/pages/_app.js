import '../styles/globals.css'
import CountProvider from "../context";

function MyApp({Component, pageProps}) {
    return <CountProvider><Component {...pageProps} /></CountProvider>
}

export default MyApp

