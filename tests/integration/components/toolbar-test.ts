import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toolbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      hbs`<Toolbar @sort="pushed" @onRefresh={{fn (mut this.xyz)}} />`
    );

    assert
      .dom()
      .hasText('Pushed Created Updated Pushed Name All Sources Forks');
  });
});
