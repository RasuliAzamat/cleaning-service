<script>
export default {
  props: ['advantagesMokApi'],
}
</script>

<template>
  <div v-for="advantagesMokApi in advantagesMokApi" class="advantagesItems">
    <p>{{ advantagesMokApi.title }}</p>
    <img :src="advantagesMokApi.image" alt="">
    <div class="advantagesItems__show">
      <p>{{ advantagesMokApi.text }}</p>
    </div>
  </div>
</template>

<style>
.advantagesItems {
  max-width: 300px;
  width: 100%;
  height: 330px;
  text-align: center;
  background: #F3F6FB;
  border-radius: 8px;
  padding: 20px 40px;
  padding-bottom: 0;
  position: relative;
}

.advantagesItems img {
  height: 120px;
}

.advantagesItems:hover .advantagesItems__show {
  opacity: 1;
}

.advantagesItems__show {
  text-align: left;
  position: absolute;
  left: 0;
  top: 0;
  background: #5A30F0;
  padding: 30px;
  height: 100%;
  border-radius: 8px;
  opacity: 0;
  transition: .4s;
}

.advantagesItems .advantagesItems__show p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
}

.advantagesItems p {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #404040;
  height: 95px;
  margin-bottom: 95px;
}
@media (max-width: 1300px){
  .advantagesItems {
    margin-bottom: 40px;
  }
}
@media (max-width: 900px){
  .advantagesItems {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
}
@import '../advantages.css';
</style>