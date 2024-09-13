"use client";

import Page from "./index";
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
