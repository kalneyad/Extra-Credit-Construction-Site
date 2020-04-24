Vue.component("likebtn", {
  data: function() {
    return {
      count: 0
    };
  },
  props: ["likesinit", "likesinc"],
  template: `<button  v-on:click="incFunction();" class="button">{{likesinit + count}} Likes</button>`,
  methods: {
    incFunction: function() {
      this.count = this.count + 1;
      this.$emit("likesinc");
    }
  }
});
new Vue({
  el: "#app",
  data: {
    nameClass: "realnames",
    likeClass: "",
    temp: 0,
    names: [
      {
        realname: "Protagonist",
        codename: "Joker",
        ifshow: true
      },
      {
        realname: "Anne",
        codename: "Panther",
        ifshow: true
      },
      {
        realname: "Ryuji",
        codename: "Skull",
        ifshow: true
      }
    ],
    likesArr: [
      {
        likes: 4
      },
      {
        likes: 2
      },
      {
        likes: 6
      }
    ]
  },
  methods: {
    ifAllCodes: function() {
      if (!this.names[0].ifshow & !this.names[1].ifshow 
         & !this.names[2].ifshow){
        this.nameClass = "codenames";
      } else {
        this.nameClass = "realnames";
      }
    },
    check: function() {
      if (this.temp > 20) {
        this.likeClass = "blue";
      }
    }
  }
});