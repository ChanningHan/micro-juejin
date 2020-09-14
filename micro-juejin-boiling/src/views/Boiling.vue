<template>
  <div id="Boiling">
    <NavBar></NavBar>
    <BoilingMain></BoilingMain>
    <BoilingSider></BoilingSider>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@comp/Boiling/NavBar";
import BoilingMain from "@comp/Boiling/BoilingMain";
import BoilingSider from "@comp/Boiling/BoilingSider";

export default {
  name: "Home",
  components: {
    NavBar,
    BoilingMain,
    BoilingSider
  },
  data() {
    return {
      test: true,
      // eslint-disable-next-line no-undef
      msg: __CHANNING_package_name__
    };
  }
};
</script>

<style lang="scss">
#Boiling {
  .boiling_card {
    background: #fff;
    box-shadow: 3px 3px 3px rgba(110, 110, 110, 0.05),
      -3px -3px 3px rgba(110, 110, 110, 0.05);
  }
}
</style>
<style lang="scss" scoped>
#Boiling {
  width: 960px;
  display: flex;
  justify-content: center;
  padding-top: 64px;
  overflow-x: hidden;
  position: relative;
  // height: 100%;
}
@media screen and (max-width: 980px) {
  .NavBar,
  .BoilingSider {
    opacity: 0;
    transform: scale(0);
    width: 0;
  }
  .BoilingMain {
    flex: 1;
    margin: 0;
  }
  //.BoilingSider {
  //  opacity: 0;
  //  transform: scale(0);
  //  transition: display 5s ease;
  //}
}

.side-fade-enter,
.side-fade-leave-to {
  opacity: 0;
}

.side-fade-enter-active,
.side-fade-leave-active {
  transition: all 1s ease;
}
</style>
