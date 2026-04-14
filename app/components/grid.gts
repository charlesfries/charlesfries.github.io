import type { TOC } from '@ember/component/template-only';

export interface GridSignature {
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    ...attributes
  >
    {{yield}}
  </div>
</template> satisfies TOC<GridSignature>;
