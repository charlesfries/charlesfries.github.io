import Grid from 'charlesfries/components/grid';
import Placeholder from 'charlesfries/components/placeholder';
import RateLimit from 'charlesfries/components/rate-limit';

const range = (length: number) => new Array<void>(length);

<template>
  <RateLimit @remaining={{null}} @max={{null}} @resetAt={{null}} />
  <Grid class="fade-top-bottom">
    {{#each (range 32)}}
      <Placeholder />
    {{/each}}
  </Grid>
</template>
