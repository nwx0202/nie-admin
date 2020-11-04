<template>
  <div class="dashboard">
    <el-row class="card-wrap">
      <el-col v-for="(card, index) in cards" :key="index">
        <el-card shadow="hover">
          <div class="card-icon">
            
          </div>
          <div class="card-info">
            <h5>{{card.name}}</h5>
            <p>{{card.num}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getCards} from '@/api/dashboard'
export default {
  name: 'Dashboard',
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    // 获取卡片数据
    this.loadCards();
  },
  methods: {
    // 获取卡片数据
    loadCards() {
      getCards().then(res => {
        if (!res) return;
        this.cards = res.cards;
      });
    }
  },
}
</script>

<style lang="scss">
.dashboard {
  padding: 15px;

  .card-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-col-24 {
    padding: 0 15px;
  }
  
  .el-card__body {
    display: flex;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    background-color: #ccc;
  }
  .card-info {
    padding-left: 15px;

    h5 {
      line-height: 2;
      font-size: 16px;
      color: rgba(0, 0, 0, .5);
    }

    p {
      font-size: 20px;
      font-weight: 600;

    }
  }
}
</style>