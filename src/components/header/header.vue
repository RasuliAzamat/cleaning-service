<script>
import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      switchClick: false,
      openMenu: false
    }
  },
  setup() {
    const headRef = ref(null);
    onMounted(() => {
      let prev = window.pageYOffset;
      window.addEventListener("scroll", () => {
        let curr = window.pageYOffset;
        if (prev < curr) {
          headRef.value.classList.remove("scrollTop");
        } else {
          headRef.value.classList.add("scrollTop");
        }
        if (curr === 0) {
          headRef.value.classList.remove("scrollTop");
        }
        prev = curr;
      });
    });
    return { headRef };
  },
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__menu" ref="headRef">
        <div class="container">
          <div class="header__logo">
            <img src="../image/Logo.svg" alt="">
            <div class="switch" @click="switchClick = !switchClick">
              <span :class="switchClick ? '' : 'switch__active'">Дом</span>
              <span :class="switchClick ? 'switch__active' : ''">Офис</span>
            </div>
          </div>
          <a @click="openMenu = !openMenu" class="header__menu-burger"><img src="../image/Menu-Icon.svg" alt="" /></a>
          <div :class="openMenu ? 'header__nav-content block' : 'header__nav-content'">
            <nav class="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item"><a href="">После ремонта</a></li>
                <li class="header__nav-item"><a href="">Генеральная уборка</a></li>
                <li class="header__nav-item"><a href="">Регулярная уборка</a></li>
                <li class="header__nav-item"><a href="">Регулярная уборка</a></li>
              </ul>
            </nav>
            <div class="header__nav-right">
              <div class="header__tel">
                <a href="">+380 67 401 69 77</a>
                <p>24/7</p>
              </div>
              <a href=""><img src="../image/Menu-Icon.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__content">
      <div class="header__content-image"></div>
      <div class="container">
        <div class="header__content-inner">
          <div class="header__content-block"></div>
          <div class="header__content-title">
            <h1>Уборка квартир
              в Киеве </h1>
            <p>Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку. </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
@import './header.css';
</style>