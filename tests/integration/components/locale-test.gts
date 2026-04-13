import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Locale from 'charlesfries/components/locale';

module('Integration | Component | locale', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Locale /></template>);

    assert.dom().hasText('English 中文 Español Français Italiano');
    assert.dom('select').exists();
  });
});
