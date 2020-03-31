<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>Animal Crossing: New Horizons</h2>
        <h3>Collectables Tracker</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-form-group label="Hemisphere">
          <b-form-radio
            v-model="hemisphere"
            name="hemisphere-radios"
            value="north"
          >
            North
          </b-form-radio>
          <b-form-radio
            v-model="hemisphere"
            name="hemisphere-radios"
            value="south"
          >
            South
          </b-form-radio>
        </b-form-group>
      </b-col>
      <b-col cols="3">

        <b-form-group label="Month">
          <b-select v-model="month" :options="monthOptions" />
        </b-form-group>
      </b-col>
      <b-col cols="3">

        <b-form-group label="Time">
          <b-form-timepicker
            now-button
            v-model="time"
          />
        </b-form-group>
      </b-col>
      <b-col cols="3">
        <b-form-group label="Only Show Catchable" label-cols="8">
          <b-form-checkbox v-model="onlyCatchable" />
        </b-form-group>
        <b-form-group label="Only Show Uncaught" label-cols="8">
          <b-form-checkbox v-model="onlyUncaught"/>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Fish</h4>
        <b-card
          v-for="f in fish"
          :key="f.id"
          v-show="shouldShowCatchable(f)"
        >
          <catchable :value="f" list="fish"/>
        </b-card>
      </h4>
      <!-- <b-col>
        <h4>Bugs</h4>
      </b-col>
      <b-col>
        <h4>Fossils</h4>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Catchable from './components/Catchable.vue';

export default {
  name: 'App',

  components: {
    Catchable,
  },

  data() {
    return {
      onlyCatchable: false,
      onlyUncaught: false,

      monthOptions: [
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 },
      ],
    };
  },
  methods: {
    currentTime() {
      const today = new Date();
      return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    },
    shouldShowCatchable({ canCatch, caught }) {
      if (this.onlyCatchable && !canCatch) return false;
      if (this.onlyUncaught && caught) return false;
      return true;
    },
  },
  computed: {
    ...mapState(['fish']),
    ...mapGetters(['hour']),

    hemisphere: {
      get() { return this.$store.state.hemisphere; },
      set(value) { this.$store.dispatch('updateHemisphere', value); },
    },
    time: {
      get() { return this.$store.state.time; },
      set(value) { this.$store.dispatch('updateTime', value); },
    },
    month: {
      get() { return this.$store.state.month; },
      set(value) { this.$store.dispatch('updateMonth', value); },
    },
  },
};
</script>
