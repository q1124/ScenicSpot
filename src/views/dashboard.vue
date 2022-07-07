<template>
  <div class="animated fadeIn" id="dashboard">
    <topBar/>
    <v-container fluid>
      <v-row dense class="mt-15 justify-center">
        <v-img class="cloud_first" max-width="230px" src="../assets/image/cloud_1@2x.png"></v-img>
        <v-col cols="12" class="mb-6">
          <v-img style="margin: 0 auto" max-width="50%" src="../assets/image/title@2x.png"></v-img>
          <p class="mt-10 pl-3 secondary--text font-weight-bold text-h6 text-center">好的回憶，來自好旅程</p>
        </v-col>
        <v-col cols="12" class="mb-6">
          <v-form ref="form">
            <v-card elevation="5" class="py-4 px-6 mx-15 my-5 rounded-pill">
              <v-row dense>
                <v-col cols="6">
                  <v-autocomplete hide-details label="市區" outlined class="rounded-pill white"></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete hide-details label="活動" outlined class="rounded-pill"></v-autocomplete>
                </v-col>
            </v-row>
            </v-card>
          </v-form>
        </v-col>
        <v-img class="saly-15" max-width="550px" src="../assets/image/Saly-15@2x.png"></v-img>
      </v-row>
      <!-- TODO: 寫成components -->
      <div style="margin-top: 200px">
        <p class="text-center text-h5 secondary--text font-weight-bold mb-10">推薦景點</p>
        <v-row dense class="justify-center mb-5">
          <v-col cols="3" v-for="scenic in this.scenicList" :key="scenic.id">
            <v-card elevation="5" class="rounded-xl pa-5">
              <v-img
                class="rounded-xl"
                height="250"
                :src="scenic.Picture.PictureUrl1"
              ></v-img>
              <v-card-title class="font-weight-bold">{{scenic.ScenicSpotName}}</v-card-title>
              <v-card-text>
                <v-icon>mdi-source-commit-start</v-icon>
                <span>{{scenic.Address}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <router-link to="/scenic" class="cursor-pointer" custom >
            <v-btn color="amber darken-4" class="rounded-pill mt-5 pa-5 white--text">看更多景點</v-btn>
          </router-link>
        </v-row>
      </div>
      <v-img class="cloud_sec" max-width="450px" src="../assets/image/cloud_1@2x.png"></v-img>
      <div style="margin-top: 200px">
        <p class="text-center text-h5 secondary--text font-weight-bold mb-10">最新活動</p>
        <v-row dense class="justify-center">
          <v-col cols="3" v-for="tourism in this.TourismList" :key="tourism.id">
            <v-card elevation="5" class="rounded-xl pa-5">
              <v-img
                class="rounded-xl"
                height="250"
                :src="tourism.Picture.PictureUrl1 || ''"
              ></v-img>
              <v-card-title class="font-weight-bold">{{tourism.ActivityName}}</v-card-title>
              <v-card-text>
                <v-icon>mdi-source-commit-start</v-icon>
                <span>{{tourism.Address}}</span>
                <div>
                  <p>{{moment(tourism.EndTime).format('YYYY-MM-DD')}}</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <router-link to="" class="cursor-pointer" custom >
            <v-btn color="amber darken-4" class="rounded-pill mt-5 pa-5 white--text">看更多活動</v-btn>
          </router-link>
        </v-row>
      </div>
      <v-img class="cloud_thr" max-width="350px" src="../assets/image/cloud_1@2x.png"></v-img>
      <div style="margin-top: 200px">
        <v-img class="saly-14" max-width="400px" src="../assets/image/Saly-14@2x.png"></v-img>
        <p class="text-center text-h5 secondary--text font-weight-bold mb-10">就是要吃美食</p>
        <v-row dense class="justify-center">
          <v-col cols="3" v-for="restaurant in this.restaurantList" :key="restaurant.id">
            <v-card elevation="5" class="rounded-xl pa-5">
              <v-img
                class="rounded-xl"
                height="250"
                :src="restaurant.Picture.PictureUrl1 || ''"
              ></v-img>
              <v-card-title class="font-weight-bold">{{restaurant.RestaurantName}}</v-card-title>
              <v-card-text>
                <v-icon>mdi-source-commit-start</v-icon>
                <span>{{restaurant.Address}}</span>
              </v-card-text>
            </v-card>
          </v-col>
          <router-link to="" class="cursor-pointer" custom >
            <v-btn color="amber darken-4" class="rounded-pill mt-5 pa-5 white--text">尋找更多美食</v-btn>
          </router-link>
        </v-row>
      </div>
      <div style="margin-top: 200px">
        <v-img class="cloud_four" max-width="450px" src="../assets/image/cloud_3@2x.png"></v-img>
        <p class="text-center text-h5 secondary--text font-weight-bold mb-10">優質名宿</p>
        <v-row dense class="justify-center">
          <v-col cols="3" v-for="hotel in this.hotelList" :key="hotel.id">
            <v-card elevation="5" class="rounded-xl pa-5">
              <v-img
                class="rounded-xl"
                style="margin: 0 auto"
                height="100%"
                width="150px"
                :src ='hotel.src'
              ></v-img>
              <v-card-title class="font-weight-bold">{{hotel.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- TODO: footer component -->
      <!-- <div>
        <v-rol>
           <v-img class="boot" max-width="350px" src="../assets/image/boot@2x.png"></v-img>
          <v-col>
            <p>台灣好好</p>
          </v-col>
        </v-rol>
      </div> -->
    </v-container>
  </div>
</template>

<script>
// TODO: 可否變vuex?
import ScenicSpot from '@/api/ScenicSpot'
import Tourism from '@/api/Tourism'
import Restaurant from '@/api/Restaurant'
// import Hotel from '@/api/Hotel'

import topBar from '@/components/topbar'

export default {
  name: 'dashboard',
  components: {
    topBar
  },
  data () {
    return {
      scenicList: [],
      TourismList: [],
      restaurantList: [],
      hotelList: [
        {
          id: 1,
          title: '一般旅館',
          src: require('../assets/image/一般旅館@2x.png')
        },
        {
          id: 2,
          title: '民宿',
          src: require('../assets/image/民宿@2x.png')
        },
        {
          id: 3,
          title: '一般觀光旅館',
          src: require('../assets/image/一般觀光旅館@2x.png')
        },
        {
          id: 4,
          title: '國際觀光旅館',
          src: require('../assets/image/國際觀光旅館@2x.png')
        }
      ]
    }
  },
  methods: {
    // 取得觀光資訊
    async getScenicSpot () {
      try {
        const { data } = await ScenicSpot.getScenicSpot()
        const lists = data
        this.scenicList = lists.splice(0, 4)
      } catch (err) {
        console.error(err)
      }
    },
    // 取得活動資訊
    async getTourism () {
      try {
        const { data } = await Tourism.getTourism()
        const lists = data
        this.TourismList = lists.splice(0, 4)
      } catch (err) {
        console.error(err)
      }
    },
    // 取得餐廳資訊
    async getRestaurant () {
      try {
        const { data } = await Restaurant.getRestaurant()
        const lists = data
        this.restaurantList = lists.splice(0, 8)
      } catch (err) {
        console.error(err)
      }
    }
    // 取得旅宿環境
    // async getHotel () {
    //   try {
    //     const { data } = await Hotel.getHotel()
    //     console.log(data)
    //     this.hotelList = data.splice(0, 4)
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
  },
  mounted () {
    this.getScenicSpot()
    this.getTourism()
    this.getRestaurant()
    // this.getHotel()
  }
}
</script>

<style scoped>
.saly-15 {
  position: absolute;
  top: 300px;
  right: 0;
}
.cloud_first {
  position: absolute;
  top: 120px;
  right: 25px;
}
.cloud_sec {
  position: absolute;
  top: 700px;
  left: 0;
}
.cloud_thr {
  position: absolute;
  top: 1450px;
  right: 0;
}
.cloud_four {
  position: absolute;
  top: 3300px;
  left: 0;
}
.saly-14 {
  position: absolute;
  top: 2100px;
  left: 0;
}
.boot {
  position: absolute;
  top: 3800px;
  right: 0;
}
</style>
