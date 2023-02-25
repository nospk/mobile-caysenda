import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';
import type { NextPage } from 'next';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


export default function App({ Component, ...pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        {getLayout(<Component {...props} />)}
      </main>
    </Provider>

  )
}


