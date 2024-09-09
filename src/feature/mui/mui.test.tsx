import { test, expect } from '@playwright/experimental-ct-react';
// import { Mui } from './mui';

import stories from "./mui.stories.portable"

test('Mui', async ({ mount }) => {
  const components = await mount(<stories.Default />);
  await expect(components).toContainText('Material UI');
});

test("MuiにKey入力を行う",async({mount })=>{
  const component = await mount(<stories.Default />);

  // 初期状態の確認
  const textField = component.getByRole("textbox");
  await expect(textField).toHaveValue('');
  await expect(textField).not.toHaveAttribute('aria-invalid', 'true');
  await expect(component.getByText('入力内容が不正です')).not.toBeVisible();

  // キー入力
  await textField.press('a');
  await textField.press('b');
  await textField.press('c');
  await textField.press('d');
  await textField.press('3');

  // 入力後の状態を確認
  await expect(textField).toHaveValue('abcd3');
  await expect(textField).toHaveAttribute('aria-invalid', 'true');
  await expect(component.getByText('入力内容が不正です')).toBeVisible();

  // テキストを削除
  await textField.fill('');

  // 削除後の状態を確認
  await expect(textField).toHaveValue('');
  await expect(textField).not.toHaveAttribute('aria-invalid', 'true');
  await expect(component.getByText('入力内容が不正です')).not.toBeVisible();
})

