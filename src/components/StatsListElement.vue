<template>
  <tbody>
    <tr>
      <td rowspan="2">
        <div class="circled">{{ details.id }}</div>
      </td>
      <td v-for="claimCell in claimsOnPeriods" v-bind:key="claimCell.period">
        <div v-bind:class="{
          cell: true,
          claimCell: true, 
          claimCellSaved: claimCell.type == 'saved',
          claimCellCash:  claimCell.type == 'cash'
          }"
          v-tooltip="claimCell.text"
          >
        </div>
        <!-- {{ claimCell.type }} -->
      </td>
    </tr>
    <tr>
      <td v-for="livedCell in livingsOnPeriods" v-bind:key="livedCell.period">
        <!-- {{ livedCell.lived }} -->
        <div v-tooltip="'living'" v-bind:class="{
          cell: true,
          livedCell: true, 
          livedCellFilled: livedCell.lived
          }" >
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "StatsListElement",
  props: {
    details: Object,
    start: String,
    end: String,
    periodsNumber: String
  },
  computed: {
    claimsOnPeriods () {
      let l = [];
      for (let i = 1; i < Number(this.periodsNumber); i++) {
        let type = 'saved' // enum : ['saved', 'cash', 'none']
        let text = 'Tenant had a job'
        // Remove this
        if (this.details.id + i < 7) {
          type = 'none'
        }
        l.push({
          period: i,
          type,
          text
        })
      }
      return l
    },
    livingsOnPeriods () {
      let l = [];
      for (let i = 1; i < Number(this.periodsNumber); i++) {
        l.push({
          period: i,
          lived: true
        })
      }
      return l
    }
  }
};
</script>

<style scoped>
  tr {
    width: 10vw;
    padding: 0;
  }
  td {
    /* border: 1px solid; */
    padding: 0;
    width: 4vw;
  }
  .circled {
    font-size: 30px;
    color: white;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: lightseagreen;
  }

  .livedCell {
    background: lightseagreen;
    position: relative;
    bottom: 9px;
  }

  .claimCell {
    position: relative;
    top: 9px;
  }

  .claimCellSaved {
    background: lightgreen;
    /* position: absolute; */
    /* bottom: 0px; */
  }

  .cell {
    cursor: pointer;
    width: 100%;
    height: 10px;
  }
</style>