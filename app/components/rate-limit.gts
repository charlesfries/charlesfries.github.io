import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

export interface RateLimitSignature {
  Args: {
    remaining: number | null;
    max: number | null;
    resetAt: string | null;
  };
}

<template>
  <div class="text-right text-gray-400 mb-6">
    <FaIcon @icon={{faInfoCircle}} class="mr-1" />
    {{t "requests" remaining=@remaining max=@max resetAt=@resetAt}}
  </div>
</template> satisfies TOC<RateLimitSignature>;
