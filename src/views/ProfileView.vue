<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'

const { user } = useAuth0()

const videoFile = ref<File | null>(null)
const videoPlayer = ref<HTMLVideoElement | null>(null)

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    videoFile.value = input.files[0]
    playVideo()
  }
}

const playVideo = () => {
  if (videoFile.value && videoPlayer.value) {
    videoPlayer.value.src = URL.createObjectURL(videoFile.value)
    videoPlayer.value.load()
    videoPlayer.value.play()
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>This is profile page</h1>
    <p>Username: {{ user?.name || user?.nickname }}</p>
    <input type="file" @change="handleFileChange" accept="video/*" />
    <video ref="videoPlayer" controls></video>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .wrapper > * {
    padding-bottom: 20px;
  }
}
</style>
