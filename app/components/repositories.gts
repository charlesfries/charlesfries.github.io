import type { TOC } from '@ember/component/template-only';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import Repository from './repository';

export interface RepositoriesSignature {
  repositories: GitHubRepository[];
}

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {{#each @repositories as |repository|}}
      <Repository @repository={{repository}} />
    {{/each}}
  </div>
</template> satisfies TOC<RepositoriesSignature>;
