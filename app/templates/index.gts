import Subheading from 'charlesfries/components/subheading';
import Toolbar from 'charlesfries/components/toolbar';
import Repositories from 'charlesfries/components/repositories';
import { t } from 'ember-intl';

<template>
  <Subheading />
  <Toolbar @sort={{this.sort}} @onRefresh={{this.refresh}} />
  <Repositories @repositories={{this.repositories}} />
  <a
    class="btn btn-outline-primary"
    href="https://github.com/charlesfries"
    role="button"
  >
    {{t "more"}}
  </a>
</template>
