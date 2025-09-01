<template>
  <div>
    <!-- Title -->
    <h1 class="page-title">Document Upload & OCR</h1>

    <!-- Upload container -->
    <div class="container">
      <img src="@/assets/cloudUpload.svg" alt="Documents" class="icon" />
      <span class="upload-text">Drag & Drop files here</span>
      <span class="support-text">Supported formats: PDF, DOCX, TXT. Max size: 50MB.</span>

      <!-- Hidden input -->
      <input
        type="file"
        ref="fileInput"
        multiple
        accept=".pdf,.docx,.txt"
        style="display: none"
        @change="uploadFiles"
      />

      <button class="button" @click="triggerFileInput">Browse Files</button>
    </div>

    <!-- Processing Queue -->
    <span class="pq1-text">Recent Processing Queue</span>
    <ProcessingQueue :files="files" @action="handleAction" />

    <!-- Processing Summary Component -->
    <span class="summary-title">Processing Summary</span>
    <ProcessingSummary :files="files" />

    <!-- Action Buttons -->
    <div class="summary-actions">
      <button class="btn-primary" @click="triggerFileInput">New Upload</button>
      <button class="btn-secondary" @click="goToSearch">Go to Search</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ProcessingQueue from './ProcessingQueue.vue'
import ProcessingSummary from './ProcessingSummary.vue'

const fileInput = ref(null)
const files = ref([])

// Trigger hidden file input
const triggerFileInput = () => {
  fileInput.value.click()
}

// Upload file flow with presigned URL
const uploadFiles = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  try {
    // Step 1: Request presigned URL from backend
    const res = await axios.post('http://localhost:8002/api/docs/presigned-upload', {
      file_name: file.name,
    })
    const uploadUrl = res.data.data.upload_url

    // Step 2: Upload file directly to S3
    await axios.put(uploadUrl, file, {
      headers: { 'Content-Type': file.type },
      onUploadProgress: (event) => {
        const progress = Math.round((event.loaded * 100) / event.total)
        console.log(`Upload progress: ${progress}%`)
      },
    })

    alert('File uploaded successfully!')
  } catch (err) {
    console.error('Upload failed:', err)
    alert('Upload failed!')
  }
}

// Handle actions from ProcessingQueue
const handleAction = (file) => {
  alert(`Menu clicked for: ${file.name}`)
}

// Example method for Go to Search
const goToSearch = () => {
  // Replace with router push if using vue-router
  alert('Navigate to Search page')
}
</script>

<style scoped>
.page-title {
  margin: 32px auto 16px auto;
  max-width: 1120px;
  font-family: 'Inter', Roboto, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #171a1f;
}

/* Upload container */
.container {
  margin: 0 auto;
  max-width: 1120px;
  min-height: 220px;
  background: #fff;
  border-radius: 16px;
  border: 2px dashed #dee1e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  text-align: center;
}
.icon {
  width: 72px;
  height: 72px;
  margin-bottom: 16px;
}
.upload-text {
  font-size: 18px;
  font-weight: 600;
  color: #171a1f;
}
.support-text {
  font-size: 14px;
  line-height: 22px;
  color: #565d6d;
  margin-top: 6px;
}
.button {
  margin-top: 20px;
  width: 140px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #4672b9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.button:hover {
  background: #2e4b79;
}

/* Queue title */
.pq1-text {
  display: block;
  margin: 32px auto 12px auto;
  max-width: 1120px;
  font-size: 20px;
  font-weight: 600;
  color: #171a1f;
}

/* Summary title */
.summary-title {
  display: block;
  margin: 32px auto 12px auto;
  max-width: 1120px;
  font-size: 20px;
  font-weight: 600;
  color: #171a1f;
}

/* Action buttons below summary */
.summary-actions {
  margin: 20px auto 40px auto;
  max-width: 1120px;
  display: flex;
  gap: 12px;
  justify-content: flex-end; /* move to right */
}

.btn-primary {
  background: #4672b9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.btn-primary:hover {
  background: #2e4b79;
}

.btn-secondary {
  background: #fff;
  color: #4672b9;
  border: 1px solid #4672b9;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.btn-secondary:hover {
  background: #f5f7fa;
}
</style>
