import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Skills from 'charlesfries/components/skills';

module('Integration | Component | skills', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Skills /></template>);

    assert.dom('p').exists();
    assert.dom('img').exists();
  });
});
