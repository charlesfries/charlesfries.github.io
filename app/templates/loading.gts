import Placeholder from 'charlesfries/components/placeholder';
import Subheading from 'charlesfries/components/subheading';
import Toolbar from 'charlesfries/components/toolbar';

<template>
  <Subheading />
  <div class="mb-3">
    <Toolbar @sort="pushed" />
  </div>
  <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 mb-3">
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
