<template>
  <div class="border border-gray-300 rounded-xl p-4">
    <div class="flex animate-pulse space-x-4">
      <div class="size-10 rounded-full bg-gray-200"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 rounded bg-gray-200"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>
          <div class="h-2 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>

  {{! <div class="col placeholder-glow">
    <div class="card">
      <div class="card-body">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-1"></span>
        <br />
        <span class="placeholder col-6"></span>
        <span class="placeholder col-5"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
      </div>
    </div>
  </div> }}
</template>
