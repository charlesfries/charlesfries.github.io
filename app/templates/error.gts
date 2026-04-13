import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

<template>
  <div class="bg-red-500 text-white rounded-lg p-4" role="alert">
    <FaIcon @icon={{faTriangleExclamation}} class="mr-1" />
    {{t "error"}}
  </div>
</template>
