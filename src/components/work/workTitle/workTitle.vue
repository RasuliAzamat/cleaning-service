<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 600) {
        this.$refs.workRef.classList.add('workAnimations');
      } else {
        this.$refs.workRef.classList.remove('workAnimations');
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<template>
  <div class="workTitle">
    <div class="container">
      <div ref="workRef" class="work__title">
        <h2>Как мы убираем</h2>
        <p>Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только
          оценить результат.</p>
      </div>
    </div>
  </div>
</template>

<style>
@import '../work.css';
</style>