import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toolbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      hbs`<Toolbar @disabled={{false}} @sort="updated" @onRefresh={{(optional)}} />`
    );

    assert.dom().hasText('Updated Created Updated Name All Sources Forks');
  });
});
