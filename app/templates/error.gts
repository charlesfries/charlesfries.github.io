import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

<template>
  <p class="text-danger">
    <FaIcon @icon={{faTriangleExclamation}} @fixedWidth={{true}} />
    {{t "error"}}
  </p>
</template>
