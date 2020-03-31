<template>
  <div style="">
    <b-icon :icon="catchableIcon" />
    {{ value.id }} {{ value.name }}
    <br />
    Months: {{ formattedMonths }}
    <br />
    Times: {{ formattedTimes }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { months } from '../constants';

export default {
  name: 'Catchable',
  props: {
    value: Object,
    list: String,
  },

  computed: {
    ...mapState(['hemisphere', 'month']),
    ...mapGetters(['hour']),

    isCatchable() {
      return this.isCatchableTime && this.isCatchableMonth;
    },

    isCatchableTime() {
      if (this.value.time.allDay) return true;

      if (this.value.time.start <= this.value.time.end) {
        return this.hour >= this.value.time.start && this.hour < this.value.time.end;
      }

      return this.hour >= this.value.time.start || this.hour < this.value.time.end;
    },

    isCatchableMonth() {
      if (this.months.allYear) return true;

      if (this.months.start <= this.months.end) {
        return this.month >= this.months.start && this.month <= this.months.end;
      }

      return this.month >= this.months.start || this.month <= this.months.end;
    },

    catchableIcon() {
      if (this.isCatchable) return 'check-circle';
      return 'x-circle';
    },

    months() {
      return {
        allYear: this.value.months.allYear,
        ...this.value.months[this.hemisphere],
      };
    },

    formattedMonths() {
      if (this.months.allYear) return 'All Year';
      if (this.months.start === this.months.end) return months[this.months.start];
      return `${months[this.months.start]} - ${months[this.months.end]}`;
    },

    formattedTimes() {
      if (this.value.time.allDay) return 'All Day';
      return `${this.formatTime(this.value.time.start)} - ${this.formatTime(this.value.time.end)}`;
    },
  },

  methods: {
    formatTime(time) {
      if (time === 12) return `${time} pm`;
      if (time > 12) return `${time - 12} pm`;
      return `${time} am`;
    },
  },

  watch: {
    isCatchable: {
      immediate: true,
      handler(newVal) {
        this.$store.dispatch('updateCanCatch', {
          id: this.value.id,
          value: newVal,
          list: this.list,
        });
      },
    },
  },
};
</script>
