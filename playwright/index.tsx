// Import styles, initialize component theme here.
// import '../src/common.css';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import React from 'react';

export type HooksConfig = {
  enableRouting?: boolean;
}

beforeMount<HooksConfig>(async ({ App, hooksConfig }) => {
  if (hooksConfig?.enableRouting)
    return <App />;
});