<template>
  <div class="dashboard mb-15">
      <v-card
          elevation="5"
          color="white"
          class="py-4 px-6 mx-15 my-5 rounded-pill d-flex">
        <div>
          <v-img
            max-width="140px"
            src= '../assets/image/topbar@2x.png'
          ></v-img>
        </div>

        <v-spacer></v-spacer>
        <v-btn elevation="1" class="rounded-pill mx-2">
          找景點
        </v-btn>
        <v-btn elevation="1" class="rounded-pill mx-2">
          找活動
        </v-btn>
        <v-btn elevation="1" class="rounded-pill mx-2">
          找美食
        </v-btn>
        <v-btn elevation="1" class="rounded-pill mx-2">
          找住宿
        </v-btn>
        <v-btn elevation="1" class="rounded-pill mx-2">
          騎鐵馬
        </v-btn>
      </v-card>
    </div>
</template>
