import React from 'react'
import AdSense from 'react-adsense';

export default function AdDisplay() {

  return (
    <AdSense.Google
      client="ca-pub-4735771565757884"
      slot="4337088929"
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />
  );
}
