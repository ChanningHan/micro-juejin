<template>
  <div id="Brochure">
    <BrochureList></BrochureList>
    <Sider></Sider>
  </div>
</template>

<script>
import BrochureList from "@/components/Brochure/BrochureList";
import Sider from "@/components/Brochure/Sider";
export default {
  name: "Home",
  components: {
    BrochureList,
    Sider
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#Brochure {
  width: 100vw;
  max-width: 960px;
  display: flex;
  //background-color: #3a50d6;
}
</style>
<style lang="scss">
.shadow_card {
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 960px) {
  #Brochure {
    .Sider {
      transform: scale(0);
      //width: 0;
      margin-left: 0;
    }
    .BrochureCard {
      width: 100vw;
    }
  }
}
@media screen and (max-width: 750px) {
  #Brochure {
    .BrochureCard {
      .main_summary {
        //opacity: 0;
        //transition: opacity 0.5s ease;
        //display: none;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  #Brochure {
    .BrochureCard {
      font-size: 12px;
      padding: 8px;
      .img_wrapper {
        transform: scale(0.8);
      }
      .main_wrapper {
        transform: translateX(-20px);
        //transform: perspective(100px) translateZ(-20px);
        transition: transform 0.5s ease;
        .header_tag {
          display: none;
        }
        .user_level,
        .user_job {
          display: none;
        }
      }
    }
  }
}
</style>
