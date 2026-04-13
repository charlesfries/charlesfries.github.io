import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

const formatDate = (date: Date | null) => date?.toLocaleTimeString();

export interface RateLimitSignature {
  Args: {
    remaining: number | null;
    max: number | null;
    resetAt: Date | null;
  };
}

<template>
  <div class="text-right text-gray-400 mb-6">
    <FaIcon @icon={{faInfoCircle}} class="mr-1" />
    {{#if @remaining}}
      {{t
        "requests"
        remaining=@remaining
        max=@max
        resetAt=(formatDate @resetAt)
      }}
    {{/if}}
  </div>
</template> satisfies TOC<RateLimitSignature>;
