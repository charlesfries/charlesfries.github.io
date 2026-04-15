import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Technologies from 'charlesfries/components/technologies';

module('Integration | Component | technologies', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Technologies /></template>);

    assert.dom('img').exists({ count: 55 });
  });
});
