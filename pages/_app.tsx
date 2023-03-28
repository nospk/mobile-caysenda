import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { Open_Sans } from '@next/font/google';
import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';
import type { NextPage } from 'next';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


const fonter = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-google',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}


export default function App({ Component, ...pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <main className={fonter.className}>
        {getLayout(<Component {...props} />)}
      </main>
    </Provider>

  )
}


