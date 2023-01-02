import "nextra-theme-rewind/style.css";
import '../styles/custom.css'
import '../styles/base.css'

import { useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

import { useUrlHash } from '../utils/useUrlHash'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter()

  const hash = useUrlHash()

  useEffect(() => {
    if (hash && hash != '/') {
      router.push(hash)
    }
  }, [hash])

  return getLayout(
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
