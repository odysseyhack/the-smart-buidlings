<template>
  <div class="
    mdl-cell
    mdl-cell--6-col-desktop
    mdl-cell--12-col-tablet
    mdl-cell--12-col-phone
    mdl-card
    mdl-shadow--2dp
    claim-card"
  >
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ title }}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{ description }}
    </div>
    <div class="mdl-card__actions mdl-card--border">

      <label class="fileContainer">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored claim-button">
          Claim
          <input type="file" ref="claimProofFiles" @change="fileLoaded" />
        </button>
      </label>
    </div>
  </div>
</template>

<script>
import State from '../State.js'
import Blockchain from '../Blockchain.js'

export default {
  data () {
    return {
      files: [],
      state: State
    }
  },
  props: {
    title: String,
    description: String
  },
  methods: {
    fileLoaded () {
      this.files = this.$refs.claimProofFiles
      // TODO
      this.showSpendingQuestion()
    },
    showSpendingQuestion () {
      this.state.showQuestionModalDialog(function (choice) {
        Blockchain.claim(choice)
      })
    }
  }
}
</script>

<style scoped>
.fileContainer {
    overflow: hidden;
    position: relative;
}

.fileContainer [type=file] {
    cursor: pointer;
    display: block;
    /* font-size: 999px; */
    /* filter: alpha(opacity=0); */
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}

.claim-button {
    width: 100px;
    border-radius: 10px;
  /*  box-shadow: 0 2px #000; */
    font-size: 16px;
    letter-spacing: 0.5px;
    height: 40px;
    margin-top: 6px;
}

.claim-button:hover {
  cursor: pointer;
}

* {
  font-family: Rubik !important;
}
</style>
