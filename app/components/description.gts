import { t } from 'ember-intl';

<template>
  <p class="mb-4">{{t "description" name=(t "name") htmlSafe=true}}</p>
</template>
