import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { formatNumber, formatTime, t } from 'ember-intl';
import { eq } from 'ember-truth-helpers';

const isRunningLow = (remaining: number | null, max: number | null) => {
  if (remaining === null || max === null) {
    return false;
  }
  return remaining <= max * 0.1;
};

export interface RateLimitSignature {
  Args: {
    remaining: number | null;
    max: number | null;
    resetAt: Date | null;
  };
}

<template>
  <div
    class="text-sm text-right text-gray-400
      {{if (isRunningLow @remaining @max) 'text-red-500' 'text-gray-400'}}
      mb-6"
  >
    <FaIcon @icon={{faInfoCircle}} class="mr-1" />
    {{#unless (eq null @remaining)}}
      {{t
        "requests"
        remaining=(formatNumber @remaining)
        max=(formatNumber @max)
        resetAt=(formatTime @resetAt)
      }}
    {{/unless}}
  </div>
</template> satisfies TOC<RateLimitSignature>;
