<template>
  <div class="queue-wrapper">
    <!-- Header -->
    <div class="queue-header">
      <h2></h2>
      <span class="queue-count">{{ files.length }} files</span>
    </div>

    <!-- File rows -->
    <div class="queue-list">
      <div v-for="file in files" :key="file.name + file.date" class="queue-row" :title="file.name">
        <!-- Icon -->
        <div class="col-icon">
          <img :src="fileIcon" class="file-icon" alt="file" />
        </div>

        <!-- Name + type -->
        <div class="col-meta">
          <div class="file-name-badge">
            <span class="file-name" :title="file.name">{{ file.name }}</span>
            <span class="file-badge">{{ file.type }}</span>
          </div>
        </div>

        <!-- Progress -->
        <div class="col-progress">
          <div
            class="progress-bar"
            role="progressbar"
            :aria-valuenow="file.progress"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress" :style="{ width: file.progress + '%' }"></div>
          </div>
          <span class="progress-label">{{ file.progress }}%</span>
        </div>

        <!-- Size + Date (inline) -->
        <div class="col-details">
          <span class="file-size">{{ file.size }}</span>
          <span class="file-date">{{ file.date }}</span>
        </div>

        <!-- Status + Actions -->
        <div class="col-status">
          <span class="status" :class="file.status.toLowerCase()">{{ file.status }}</span>
          <button class="action-btn" @click="emitAction(file)" aria-label="Actions for file">
            ⋮
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  ProcessingQueue.vue (Options API)
  - Expects `files` prop: Array of objects with keys:
    { name, type, size, date, status, progress }
  - Emits `action` with the file object when ⋮ clicked
*/
import fileIconDefault from '@/assets/file.svg' // using @ alias (Vite/CRA). If this fails, change to relative path.

export default {
  name: 'ProcessingQueue',
  props: {
    files: {
      type: Array,
      required: true,
    },
    // optional override for the file icon (keeps component flexible)
    fileIcon: {
      type: String,
      default: fileIconDefault,
    },
  },
  methods: {
    emitAction(file) {
      this.$emit('action', file)
    },
  },
}
</script>

<style scoped>
.queue-wrapper {
  margin: 0 auto;
  max-width: 1120px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 16px 20px;
  font-family:
    Inter,
    Roboto,
    system-ui,
    -apple-system,
    'Segoe UI',
    'Helvetica Neue',
    Arial;
}

/* header */
.queue-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.queue-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #171a1f;
  margin: 0;
}
.queue-count {
  font-size: 14px;
  color: #565d6d;
}

/* rows: grid ensures perfect column alignment across rows */
.queue-list {
  margin-top: 12px;
}
.queue-row {
  display: grid;
  grid-template-columns: 56px 1fr 240px 200px 140px;
  /* columns: icon | name/badge | progress | size+date | status/actions */
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}
.queue-row:last-child {
  border-bottom: none;
}
.queue-row:hover {
  background: #fafbfd;
}

/* IMPORTANT: allow truncation inside grid */
.col-meta,
.col-progress,
.col-details,
.col-status {
  min-width: 0;
}

/* icon */
.col-icon {
  display: flex;
  justify-content: center;
}
.file-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* name + badge */
.col-meta {
  display: flex;
  align-items: center;
}
.file-name-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.file-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  color: #171a1f;
  min-width: 0;
  max-width: 100%;
}
.file-badge {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  background: #4672b9;
  padding: 2px 6px;
  border-radius: 6px;
  text-transform: uppercase;
}

/* progress column */
.col-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  min-width: 120px;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #5ba999, #4672b9);
  border-radius: 6px;
}
.progress-label {
  font-size: 13px;
  color: #565d6d;
}

/* size + date inline */
.col-details {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #565d6d;
}
.file-size {
  font-weight: 500;
}
.file-date {
  opacity: 0.85;
}

/* status + action */
.col-status {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
}
.status {
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  color: #fff;
  text-transform: capitalize;
}
.status.uploading {
  background: #4672b9;
}
.status.completed {
  background: #5ba999;
}
.status.failed {
  background: #d9534f;
}

.action-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #565d6d;
  font-size: 18px;
}
.action-btn:hover {
  color: #171a1f;
}

/* responsive */
@media (max-width: 900px) {
  .queue-row {
    grid-template-columns: 40px 1fr 160px 140px 100px;
    gap: 12px;
  }
  .progress-bar {
    min-width: 90px;
  }
}
</style>
