import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import { Provider } from 'react-redux';
import { Montserrat } from '@next/font/google'
const font = Montserrat({
  subsets: ['cyrillic']
})

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return <Provider store={store}>
    <Component {...props.pageProps} />
  </Provider>
}

export default App;