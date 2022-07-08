<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 0) {
        this.$refs.orderRef.classList.add('scrollBottom');
      } else {
        this.$refs.orderRef.classList.remove('scrollBottom');
      }
      if (window.pageYOffset > 1550) {
        this.$refs.orderRef.classList.add('scrollBottomRemove');
      } else {
        this.$refs.orderRef.classList.remove('scrollBottomRemove');
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<template>
  <div id="orderBox">
    <div ref="orderRef" class="order" id="boxElem">
      <p>Заказать
        уборку
      </p>
    </div>
  </div>

</template>

<style>
#orderBox {
  width: 200px;
  height: 200px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 111;
}

.order {
  cursor: pointer;
  width: 195px;
  height: 195px;
  position: fixed;
  left: 45%;
  right: 55%;
  bottom: 30px;
  background: #5A30F0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s;
  animation: orderBlock 1.5s linear;
}

.scrollBottomRemove {
  animation: orderNone 1s linear;
  opacity: 0;
}

@keyframes orderNone {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes orderBlock {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.scrollBottom {
  bottom: -65px;
}

.order::after {
  content: '';
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.order:hover::after {
  border: 1px solid #fff;
  border-radius: 50%;
  transform: scale(1.5);
  opacity: .4;
}

.order:hover {
  content: '';
  transform: scale(1.2);
}

.order p {
  text-align: center;
  max-width: 160px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
  animation: orderText 10s linear infinite;
}

@keyframes orderText {
  0% {
    transform: rotate(-180deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@media (max-width: 1100px) {
  #orderBox {
    width: 100px;
    height: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 111;
  }

  .order {
    cursor: pointer;
    width: 95px;
    height: 95px;
    position: fixed;
    left: 45%;
    right: 55%;
    bottom: 30px;
    background: #5A30F0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    animation: orderBlock 1.5s linear;
  }

  .order p {
    text-align: center;
    max-width: 160px;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    animation: orderText 10s linear infinite;
  }
}
@media (max-width: 460px) {
  #orderBox {
    width: 100px;
    height: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 111;
  }

  .order {
    cursor: pointer;
    width: 95px;
    height: 95px;
    position: fixed;
    left: 38%;
    right: 55%;
    bottom: 30px;
    background: #5A30F0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    animation: orderBlock 1.5s linear;
  }

  .order p {
    text-align: center;
    max-width: 160px;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    animation: orderText 10s linear infinite;
  }
}
</style>
