import React from 'react'
import AdSense from 'react-adsense';

export default function AdDisplay() {

  return (
    <AdSense.Google
      client="ca-pub-5275574079376570"
      slot="7806394673"
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
}