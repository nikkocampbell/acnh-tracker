<template>
  <div style="">
    <b-row>
      <b-col>
        <b-icon :icon="catchableIcon" />
        {{ value.id }} {{ value.name }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <span>
          Months: {{ formattedMonths }}
        </span>
        <br />
        <span>
          Times: {{ formattedTimes }}
        </span>
      </b-col>
      <b-col>
        <span>
          Location: {{ value.location }}
        </span>
        <br />
        <span>
          Size: {{ value.size}}
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Caught" label-cols="1" class="mb-0">
          <b-form-checkbox v-model="caught"/>
        </b-form-group>
      </b-col>
    </b-row>
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
    ignoreTime: Boolean,
  },

  computed: {
    ...mapState(['hemisphere', 'month']),
    ...mapGetters(['hour']),

    caught: {
      get() {
        return this.value.caught;
      },
      set(value) {
        this.$store.dispatch('updateCaught', {
          id: this.value.id,
          value,
          list: this.list,
        });
      },
    },

    isCatchable() {
      return this.isCatchableTime && this.isCatchableMonth;
    },

    isCatchableTime() {
      if (this.ignoreTime) return true;
      if (this.value.time.allDay) return true;

      if (this.value.time.start <= this.value.time.end) {
        return this.hour >= this.value.time.start && this.hour < this.value.time.end;
      }

      return this.hour >= this.value.time.start || this.hour < this.value.time.end;
    },

    isCatchableMonth() {
      if (this.months.allYear) return true;

      return this.months.ranges.some((range) => {
        if (range.start <= range.end) {
          return this.month >= range.start && this.month <= range.end;
        }
        return this.month >= range.start || this.month <= range.end;
      });
    },

    catchableIcon() {
      if (this.isCatchable) return 'check-circle';
      return 'x-circle';
    },

    months() {
      return {
        allYear: this.value.months.allYear,
        ranges: this.value.months[this.hemisphere],
      };
    },

    formattedMonths() {
      if (this.months.allYear) return 'All Year';
      return this.months.ranges
        .map((m) => {
          if (m.start === m.end) return months[m.start];
          return `${months[m.start]} - ${months[m.end]}`;
        })
        .join(', ');
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
