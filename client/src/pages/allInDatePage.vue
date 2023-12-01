<template>
  <div class="quotes">
    <div class="form">
      <div class="pick">
        <span>Выберите дату: </span>
        <el-date-picker class="date-picker" size="large" value-format="YYYY-MM-DD" min="2020-01-01" v-model="selectedDate"/>
      </div>

      <div>
        <el-button class="getBtn" size="large" @click="getData">Получить данные</el-button>
      </div>
    </div>

    <quotes-list :quotes="quotes" v-if="quotes && quotes.length" :date="propDate"/>
  </div>

</template>

<script>
import QuotesList from "@/components/QuotesList";
import {ElDatePicker, ElButton} from 'element-plus'
import axios from "axios";


export default {
  components: {QuotesList, ElDatePicker, ElButton},
  data() {
    return {
      quotes: [],
      selectedDate: '2020-01-01',
      propDate: '2020-01-01'
    }
  },
  methods: {
    async getData() {
      try {
        let response = await axios.get(`quotes?date=${this.selectedDate}`)
        const quotes = response.data
        console.log(quotes)
        response = await axios.get('http://localhost:3000/api/tickers')
        const tickers = response.data
        console.log(tickers)
        for (let quote of quotes) {
          for(let ticker of tickers) {
            if (quote.ticker === ticker.ticker) {
              quote.name = ticker.name
              quote.currency = ticker.currency
            }
          }
        }
        this.propDate = this.selectedDate
        this.quotes = quotes
      } catch (e) {
        alert('Ошибка запроса')
      }

    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.pick {
  display: block;
}
span {
  font-size: 20px;
  margin-right: 20px;
}

.getBtn {
  font-size: 18px;
  margin-top: 20px;
}

.form {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
}

.quotes {
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
  margin-left: 90px;
  margin-right: 90px;
  padding: 20px 50px;
}

</style>
