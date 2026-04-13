import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Toolbar from 'charlesfries/components/toolbar';

module('Integration | Component | toolbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const refresh = () => {};

    await render(<template><Toolbar @onRefresh={{refresh}} /></template>);

    assert.dom().hasText('Created Updated Pushed Name All Sources Forks');
  });
});
