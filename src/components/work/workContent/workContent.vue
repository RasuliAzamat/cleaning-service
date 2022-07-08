<script>
export default {
  data() {
    return {
      activeBlock: true,
      active: false,
      active2: false,
      active3: false,
      active4: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 1600) {
        this.$refs.workContentRef.classList.add("workContentAnimations");
      } else {
        this.$refs.workContentRef.classList.remove("workContentAnimations");
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
}
</script>

<template>
  <div ref="workContentRef" class="work__content">
    <img src="../../image/Placeholder.jpg" alt="">
    <div class="work__content-image">
      <div
        :class="activeBlock ? 'work__content-image__item work__content-kitchen' : 'work__content-image__item work__content-bathroom__none'">
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
      </div>
      <div :class="active2 ? 'work__content-image__item work__content-bathroom' : 'work__content-bathroom__none'">
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
      </div>
      <div
        :class="active3 ? 'work__content-image__item work__content-kitchen' : 'work__content-bathroom__none'">
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
      </div>
      <div :class="active4 ? 'work__content-image__item work__content-bathroom' : 'work__content-bathroom__none'">
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
        <div class="work__content-tooltip"><img src="../../image/Union.svg" alt="" /></div>
      </div>
    </div>
    <nav class="work__content-navbar">
      <p>Как мы убираем</p>
      <ul>
        <li><a :class="activeBlock ? 'active' : ''"
            @click="activeBlock = true, active = true, active2 = false, active3 = false, active4 = false">Кухня</a></li>
        <li><a :class="active2 ? 'active' : ''"
            @click="activeBlock = false,active = false, active2 = true, active3 = false, active4 = false">Комнаты</a></li>
        <li><a :class="active3 ? 'active' : ''"
            @click="activeBlock = false, active = false, active2 = false, active3 = true, active4 = false">Ванная</a></li>
        <li><a :class="active4 ? 'active' : ''"
            @click="activeBlock = false, active = false, active2 = false, active3 = false, active4 = true">Прихожая</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
@import './workContent.css';
</style>