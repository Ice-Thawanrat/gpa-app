<template>
  <q-page padding>
    <q-card shadow-3 bg-gray-2 class="q-ma-md note-card">
      <q-card-section>
        <div class="text-h6">My Note</div>
        <div class="text-body-2">This is a body card.</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
.note-card {
  border-radius: 16px;
  cursor: pointer;
}

.note-card:hover {
  /* ระดับขอบมน */
  box-shadow: 0 8px 12px pink !important;
}
</style>
