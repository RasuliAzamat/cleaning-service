<script>
import { onMounted, ref } from "vue";

import AdvantagesItem from "./advantagesItem/advantagesItem.vue";

import image1 from '../image/image1.png'
import image2 from '../image/image2.png'
import image3 from '../image/image3.png'
import image4 from '../image/image4.png'

export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 200) {
        this.$refs.advantagesRef.classList.add('advantagesAnimations');
      } else {
        this.$refs.advantagesRef.classList.remove('advantagesAnimations');
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  components: { AdvantagesItem },
  data() {
    return {
      advantagesMokApi:
        [
          {
            id: 1,
            title: 'Тщательно отобранный персонал',
            image: image1,
            text: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы.За счет больших объемов мы можем сделать это эффективнее.'
          },
          {
            id: 2,
            title: 'Качественная эко-химия',
            image: image2,
            text: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы.За счет больших объемов мы можем сделать это эффективнее.'
          },
          {
            id: 3,
            title: 'Контролируем качество',
            image: image3,
            text: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы.За счет больших объемов мы можем сделать это эффективнее.'
          },
          {
            id: 4,
            title: 'Работаем круглосуточно',
            image: image4,
            text: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы.За счет больших объемов мы можем сделать это эффективнее.'
          }
        ]
    }

  }
}

</script>

<template>
  <div class="advantages">
    <div class="container">
      <div ref="advantagesRef" class="advantages__content">
        <AdvantagesItem :advantagesMokApi="advantagesMokApi" />
      </div>
    </div>
  </div>
</template>

<style>
@import './advantages.css';
</style>