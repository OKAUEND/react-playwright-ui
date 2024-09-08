import { test, expect } from '@playwright/experimental-ct-react';
// import { Mui } from './mui';

import stories from "./mui.stories.portable"

test('Mui', async ({ mount }) => {
  const components = await mount(<stories.Default />);
  await expect(components).toContainText('Material UI');
});