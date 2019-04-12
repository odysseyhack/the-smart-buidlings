<template>
  <dialog class="mdl-dialog question-dialog">
    <h3>How to spend your reward?</h3>
    <p>
      Some text with proper description for each option.
      Some text with proper description for each option
    </p>
    <table>
      <tr id="table-row">
        <td>
          <div @click="choose('saving')" class="choice-button" id="save-choice">
            <!-- Add 200GBP to savings -->
            <img class="choice-image" src="../../public/save-icon.png">
            <p>
              Add to saving 300GBP
            </p>
          </div>
        </td>
        <td>
          <div @click="choose('payout')" class="choice-button" id="payout-choice">
            <img class="choice-image" src="../../public/payout-icon.png">
            <p>
              Instant payout 200GBP
            </p>
          </div>
        </td>
      </tr>
    </table>
  </dialog>
</template>

<script>
  import State from "../State.js"

  export default { 
    name: "QuestionModalDialog",
    data () {
      return {
        state: State.state
      }
    },
    methods: {
      choose (choice) {
        var dialog = document.querySelector('dialog')
        dialog.close()
        State.runCallback(choice)
      }
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
  }

  .question-dialog {
    min-width: 50vw;
    max-width: 90vw;
    width: 500px;
    /* height: 300px; */
  }


  .choice-image {
    width: 100px;
  }

  .choice-button {
    margin: auto;
    width: 100px;
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;
    /* height: 100px; */
    /* background: grey; */
    background-size: contain;
    cursor: pointer;
  }

  .choice-button:hover {
    background: lightblue;
  }

  table {
    margin: auto;
    width: 80%;
  }
</style>

