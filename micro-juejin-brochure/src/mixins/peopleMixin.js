const peopleMixin = {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("hello from mixin");
    }
  }
};

export default peopleMixin;
