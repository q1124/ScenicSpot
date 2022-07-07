<template>
  <div class="animated fadeIn" id="scenic">
    <topBar/>
    <v-container fluid>
      <v-row>
        <v-col>
          <p class="pl-3 font-weight-bold text-h4 text-center">找景點</p>
        </v-col>
      </v-row>
      <v-img class="cloud_first" max-width="300px" src="../assets/image/cloud_1@2x.png"></v-img>
      <v-row dense align="center" class="mt-5">
        <v-col cols="3" v-for="scenic in scenicSpot" :key="scenic.id">
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import topBar from '@/components/topbar'

export default {
  name: 'scenic',
  components: {
    topBar
  },
  computed: {
    ...mapGetters({
      scenicSpot: 'Scenic/scenicSpot'
    })
  },
  methods: {
    ...mapActions({
      getScenic: 'Scenic/getScenic'
    })
  },
  mounted () {
    this.getScenic()
  }
}
</script>

<style scoped>

</style>
