import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Landing from 'src/pages/Landing';
import Cover from 'src/pages/Cover';
// import { googleLogout } from '@react-oauth/google';

export default function Home() {
  const [{ token }] = useCookies(['token']);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return <div>{token ? <Cover /> : <Landing />}</div>;
}
