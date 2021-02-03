<template>
  <div>
    <!-- Grand dad -->
    <!-- TypeScript Class API Integration in Vue/Nuxt explaned for Options API people including myself -->
  </div>
</template>


<!-- 
In 'tsconfig.json' Add this under 'strict' so they don't throw errors about props
"strictPropertyInitialization": false, 



-->


<script lang="ts">
// Install this and @decorations become ez to use
// yarn add -D nuxt-property-decorator
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class ThisIsTheNameOfTheComponentYouWroteInsideNameSectionBefore extends Vue {
  // Props: Kinda messy when you have many props
  @Prop({ type: Boolean, default: false }) isThisMeme: boolean = false;
  @Prop({ type: Boolean, required: false }) isThisAlsoMeme: boolean = false;

  // Data: yes
  randomNumber: number = 0;
  randomString: string = "asdf";
  randomStringNoDefault: string;

  $axios: any;

  // Methods: just write a function, no declaration needed
  randomFunction() {
    alert(
      "I do not accept Hawaiian Pizza. How could a capable normal person put things such as pineapple on them?"
    );
  }
  // // Also async/await
  async waitHoldUp() {
    const r = await this.$axios.get("https://penis.download");
    console.log(r);
  }

  // Computed: Put 'get' before a function and it magically becomes a computed. As before it needs to return something
  get maTellYouSomething(): string {
    const theWiseWord: string = `${this.randomString} is the knowledge I giveth to you`;
    return theWiseWord;
  }

  // Lifecycle Hooks: Write it down like a function
  mounted() {
    //
  }

  beforeRouteEnter(to: object, from: object, next: Function) {
    next((vm: any) => {
      // You can't use 'this' here like original beforeRouteEnter
      // i.e 'this.randomNumber' becomes 'vm.randomNumber'
    });
  }
}
</script>

<style scoped lang="scss">
// Op
</style>
