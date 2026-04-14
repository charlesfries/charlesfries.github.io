import Grid from 'charlesfries/components/grid';
import Placeholder from 'charlesfries/components/placeholder';
// import RateLimit from 'charlesfries/components/rate-limit';

const range = (length: number) => new Array<void>(length);

<template>
  {{!-- <RateLimit @remaining={{null}} @max={{null}} @resetAt={{null}} /> --}}
  <Grid>
    {{#each (range 24)}}
      <Placeholder />
    {{/each}}
  </Grid>
</template>
