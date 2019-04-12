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
        console.log('Choice was made: ' + choice)
      })
      // TODO
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

.claim-button:hover {
  cursor: pointer;
}
</style>


