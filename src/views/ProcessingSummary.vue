<template>
  <div class="summary-container">
    <div class="summary-card">
      <h3>{{ totalDocs }}</h3>
      <p>Total Documents</p>
    </div>
    <div class="summary-card success">
      <h3>{{ successDocs }}</h3>
      <p>Successfully Processed</p>
    </div>
    <div class="summary-card failed">
      <h3>{{ failedDocs }}</h3>
      <p>Failed Documents</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  files: {
    type: Array,
    required: true,
  },
})

const totalDocs = computed(() => props.files.length)
const successDocs = computed(() => props.files.filter((f) => f.status === 'Completed').length)
const failedDocs = computed(() => props.files.filter((f) => f.status === 'Failed').length)
</script>

<style scoped>
.summary-container {
  margin: 0 auto;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.summary-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.summary-card h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #171a1f;
}

.summary-card p {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #565d6d;
}

.summary-card.success h3 {
  color: #5ba999;
}
.summary-card.failed h3 {
  color: #d9534f;
}
</style>
