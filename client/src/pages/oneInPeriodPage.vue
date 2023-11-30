<template>
  <div class="quotes">
    <div class="form">
      <div class="pick">
        <div class="select">
          <span>Выберите тикер: </span>
          <el-select class="select__input" placeholder="Выберите тикер" v-model="selectedTicker">
            <el-option v-for="ticker in tickers" :key="ticker.id" :value="ticker.ticker">
              {{ ticker.ticker }}
            </el-option>
          </el-select>
        </div>
        <div>
          <span>Выберите период: </span>
          <el-date-picker class="date-picker" type="daterange" size="large" value-format="YYYY-MM-DD"
                          v-model="dateRange"/>
        </div>
      </div>
      <div>
        <el-button class="getBtn" size="large" @click="getData">Получить данные</el-button>
      </div>
    </div>
    <div v-if="quotes && quotes.length">
      <quotes-list-range :quotes="quotes"/>
      <div class="pagination_container">

        <el-select class="limit" v-model="limit" @change="changeLimit($event)">
          <el-option value="10">10</el-option>
          <el-option value="20">20</el-option>
          <el-option value="50">50</el-option>
          <el-option value="100">100</el-option>
        </el-select>

        <el-pagination layout="prev, pager, next" :total="totalPages*10" v-model="currentPage"  @current-change="changePage" pager-count="4" />
      </div>
    </div>

  </div>

</template>

<script>
import {ElDatePicker, ElButton, ElSelect, ElOption, ElPagination} from 'element-plus'
import axios from "axios";
import QuotesListRange from "@/components/QuotestListRange";


export default {
  components: {QuotesListRange, ElDatePicker, ElButton, ElSelect, ElOption, ElPagination},
  data() {
    return {
      totalPages: 4,
      currentPage: 1,
      limit: 10,
      quotes: [],
      tickers: [],
      selectedTicker: '',
      dateRange: ['2020-01-01', '2020-01-02'],
    }
  },
  methods: {
    async changePage(page) {
      this.currentPage = page
      await this.getData()
    },

    async changeLimit(limit) {
      this.limit = limit
      await this.getData()
    },

    async getTickers() {
      try {
        const response = await axios.get('tickers')
        this.tickers = response.data
      } catch (e) {
        alert(e)
      }
    },
    async getData() {
      try {
        let response = await axios.get(`quotes/${this.selectedTicker}?startDate=${this.dateRange[0]}&endDate=${this.dateRange[1]}&limit=${this.limit}&page=${this.currentPage}`)
        const quotes = response.data.quotes
        this.totalPages = Math.ceil(response.data.count / this.limit)
        for (let quote of quotes) {
          for (let ticker of this.tickers) {
            if (quote.ticker === ticker.ticker) {
              quote.name = ticker.name
              quote.currency = ticker.currency
            }
          }
        }
        this.quotes = quotes
      } catch (e) {
        alert(e)
      }

    }
  },
  async mounted() {
    await this.getTickers()
  }
}
</script>

<style scoped>

.pagination_container {
  width: fit-content;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
}

.limit {
  width: 70px;
}

.select {
  margin-bottom: 20px;

}

.select__input {
  margin-left: 16px;
}

.pick {
  margin-top: 30px;
}

span {
  font-size: 20px;
  margin-right: 20px;
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

.getBtn {
  font-size: 18px;
  margin-top: 20px;
}
</style>
