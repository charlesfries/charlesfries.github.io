import { t } from 'ember-intl';

<template>
  <p>{{t "description" name=(t "name") htmlSafe=true}}</p>
</template>
