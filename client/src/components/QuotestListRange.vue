<template>
  <h1>Итоги торгов по {{quotes[0].ticker}} за выбранный период</h1>
  <table class="quotesList__table">
    <thead>
    <tr>
      <th>Наименование</th>
      <th>Тикер</th>
      <th>Дата</th>
      <th>Стоимость</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="quote in quotes" :key="quote.id">
      <td>{{quote.name}}</td>
      <td>{{quote.ticker}}</td>
      <td>{{quote.date.split('T')[0]}}</td>
      <td>{{quote.price}} {{quote.currency}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "QuotesListRange",
  props: {
    quotes: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

.quotesList__table {
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
}

.quotesList__table th,
.quotesList__table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}

h1 {
  font-weight: 600;
}

.quotesList__table th {
  font-weight: 500;
  font-size: 20px;
}

.quotesList__table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>