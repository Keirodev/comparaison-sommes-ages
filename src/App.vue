<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2 class="headline font-weight-bold">
          Comparaison de la somme des âges de 2 personnes
          <v-icon color="orange">mdi-human-female-boy</v-icon>
        </h2>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <ComparaisonAge/>
    </v-main>
  </v-app>
</template>

<script>
import ComparaisonAge from './components/ComparaisonAge'

export default {
  name: 'App',

  components: {
    ComparaisonAge
  },

  data: () => ({
    //
  })
}
</script>
