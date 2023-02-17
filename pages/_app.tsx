import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...props} />
      </main>
    </Provider>

  )
}
