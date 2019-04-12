<template>
  <!-- Always shows a header, even in smaller screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <div class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Alice.sh</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a
            class="mdl-navigation__link"
            v-bind:class="{selected: selected == 'wallet'}"
            href="/wallet"
          >Wallet</a>
          <a
            class="mdl-navigation__link"
            v-bind:class="{selected: selected == 'voting'}"
            href="/voting"
          >Voting</a>
        </nav>
      </div>
    </div>

    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Alice.sh</span>
      <nav class="mdl-navigation">
        <a
          class="mdl-navigation__link"
          v-bind:class="{selected: selected == 'wallet'}"
          href="/wallet"
        >Wallet</a>
        <a
          class="mdl-navigation__link"
          v-bind:class="{selected: selected == 'voting'}"
          href="/voting"
        >Voting</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    selected: String
  }
};
</script>

<style>
.selected {
  text-decoration: underline;
}
</style>

