import Placeholder from 'charlesfries/components/placeholder';
import RateLimit from 'charlesfries/components/rate-limit';

<template>
  <RateLimit @remaining={{null}} @max={{null}} @resetAt={{null}} />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
  </div>
</template>
