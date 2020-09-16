<template>
  <div class="ADCarousel_container">
    <a-skeleton :loading="loading" active :paragraph="{ rows: 6 }">
      <a-carousel
        autoplay
        :dotPosition="'bottom'"
        class="ADCarousel"
        effect="fade"
        :autoplaySpeed="1500"
        :dotsClass="'carousel_dots'"
      >
        <div v-for="banner in list" :key="banner.id" class="banner_wrapper">
          <img
            v-lazy="'https://images.weserv.nl/?url=' + banner.screenshot"
            alt="screenShot"
          />
        </div>
      </a-carousel>
    </a-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  computed: {
    list() {
      return this.$store.getters["activity/bannerList"];
    }
  },
  async created() {
    await this.$store.dispatch("activity/getBannerList");
    console.log(this.list);
    this.loading = false;
  }
};
</script>

<style lang="scss">
.ADCarousel_container {
  .ADCarousel {
    .slick-dots li.slick-active button {
      background: #007fff !important;
    }
    .slick-dots li button {
      border-radius: 50%;
      width: 12px !important;
      height: 12px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
      transform: translateY(-10px);
    }
  }
}
</style>
<style scoped lang="scss">
.ADCarousel_container {
  flex: 1;
  //background: #3a50d6;
  //width: 50%;
  background: #fff;
  overflow: hidden;
  .ADCarousel {
    width: 100%;
    height: 100%;
    .banner_wrapper {
      height: 300px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
<style></style>
