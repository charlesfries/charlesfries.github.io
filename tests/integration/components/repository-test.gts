import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Repository from 'charlesfries/components/repository';
import type { GitHubRepository } from 'charlesfries/utils/github-types';

module('Integration | Component | repository', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const repository: GitHubRepository = {
      name: 'Name',
      description: 'This is a description.',
      url: 'https://github.com/',
      stargazerCount: 1,
      forkCount: 2,
      isFork: false,
      pushedAt: new Date(2026, 0, 1).toISOString(),
      primaryLanguage: {
        name: 'TypeScript',
      },
    };

    await render(
      <template><Repository @repository={{repository}} /></template>,
    );

    assert.dom().hasText('This is a description. 1 2 Updated on January 2026');
  });
});
