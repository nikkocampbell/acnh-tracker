<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>Animal Crossing: New Horizons</h2>
        <h3>Collectables Tracker</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
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

        <b-form-group label="Month">
          <b-select v-model="month" :options="monthOptions" />
        </b-form-group>

        <b-form-group label="Time">
          <b-form-timepicker
            now-button
            v-model="time"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Fish</h4>
        <b-card
          v-for="f in fish"
          :key="f.id"
        >
          <catchable
            :value="f"
            :hemisphere="hemisphere"
            :month="month"
            :hour="hour"
          />
        </b-card>
      </b-col>
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
import Catchable from './components/Catchable.vue';
import fish from './data/fish';

export default {
  name: 'App',

  components: {
    Catchable,
  },

  data() {
    return {
      hemisphere: 'north',
      month: 1,
      time: this.currentTime(),

      fish,
      // bugs: data.bugs,
      // fossils: data.fossils,

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
  },
  computed: {
    hour() {
      return parseInt(this.time.split(':')[0], 10);
    },
  },
};
</script>
