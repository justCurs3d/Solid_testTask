<template>
  <div class="tickersList">
    <h1>Список ценных бумаг</h1>
    <table class="tickersList__table">
      <thead>
      <tr>
        <th>Наименование</th>
        <th>Тикер</th>
        <th>Валюта</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ticker in tickers" :key="ticker.id">
        <td>{{ticker.name}}</td>
        <td>{{ticker.ticker}}</td>
        <td>{{ticker.currency}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "TickersList",
  data() {
    return {
      tickers: []
    }
  },

  async mounted() {
    try {
      const tickers = await axios.get('tickers')
      this.tickers = tickers.data
    } catch (e) {
      console.log(e)
    }

  }
}
</script>

<style scoped>
.tickersList {
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
  margin-left: 90px;
  margin-right: 90px;
  padding: 10px;
}

.tickersList__table {
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
}

.tickersList__table th,
.tickersList__table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}

h1 {
  font-weight: 600;
}

.tickersList__table th {
  font-weight: 500;
  font-size: 20px;
}

.tickersList__table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>