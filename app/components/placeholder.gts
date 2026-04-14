import { CARD_CLASS_NAME } from './repository';

const CLASS_NAME = 'bg-neutral-200 dark:bg-neutral-800';

<template>
  <div class={{CARD_CLASS_NAME}}>
    <div class="flex animate-pulse space-x-4">
      <div class="size-10 rounded-full {{CLASS_NAME}}"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 rounded {{CLASS_NAME}}"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 h-2 rounded {{CLASS_NAME}}"></div>
            <div class="col-span-1 h-2 rounded {{CLASS_NAME}}"></div>
          </div>
          <div class="h-2 rounded {{CLASS_NAME}}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
