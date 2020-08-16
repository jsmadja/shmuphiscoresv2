<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Statistics</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" lg="6">
        <h2>Joueurs invaincus</h2>
        <div>
          Les joueurs ci-dessous sont en première place pour chacun de leurs
          jeux.
        </div>
        <v-data-table
          :headers="headers"
          :items="items"
          @click:row="handleClick"
        ></v-data-table>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <highcharts :options="chartOptions"></highcharts>
        </v-card>
        <v-card class="mt-1">
          <highcharts :options="gamesByPlatforms"></highcharts>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "Statistics",
  components: { highcharts: Chart },
  data() {
    return {
      headers: [
        { text: "Player", value: "player" },
        { text: "# Records", value: "records" },
        { text: "Games", value: "games" },
      ],
      items: [
        {
          player: "yumi matsuzawa",
          records: "5",
          games: "Caladrius Raiden IV",
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
        },
        title: {
          text: "Scores",
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            },
          },
        },
        yAxis: {
          title: {
            text: "Scores",
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + "k";
            },
          },
        },
        plotOptions: {
          area: {
            pointStart: 2013,
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        series: [
          {
            name: "Scores",
            data: [6, 11, 32, 110, 235, 369, 400, 420],
          },
        ],
      },
      gamesByPlatforms: {
        chart: {
          type: "pie",
        },
        title: {
          text: "Platforms",
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
          point: {
            valueSuffix: "%",
          },
        },

        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: "{point.name}: {point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "Platforms",
            colorByPoint: true,
            data: [
              {
                name: "PS1",
                y: 62.74,
              },
              {
                name: "PCB",
                y: 10.57,
              },
              {
                name: "PS2",
                y: 7.23,
              },
              {
                name: "PCE",
                y: 5.58,
              },
              {
                name: "XBOX",
                y: 4.02,
              },
              {
                name: "NES",
                y: 1.92,
              },
              {
                name: "SNES",
                y: 7.62,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleClick() {
      this.$router.push("/player");
    },
  },
};
</script>

<style scoped></style>
