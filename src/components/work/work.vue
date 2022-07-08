<script>
import WorkTitle from './workTitle/workTitle.vue'
import WorkContent from './workContent/workContent.vue';

export default {
  components: { WorkTitle, WorkContent }
}
</script>

<template>
  <div class="work">
    <WorkTitle />
    <WorkContent />
  </div>
</template>

<style>
@import './work.css';
</style>