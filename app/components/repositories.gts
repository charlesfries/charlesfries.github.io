import type { TOC } from '@ember/component/template-only';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import Grid from './grid';
import Repository from './repository';

export interface RepositoriesSignature {
  repositories: GitHubRepository[];
}

<template>
  <Grid>
    {{#each @repositories as |repository|}}
      <Repository @repository={{repository}} />
    {{/each}}
  </Grid>
</template> satisfies TOC<RepositoriesSignature>;
