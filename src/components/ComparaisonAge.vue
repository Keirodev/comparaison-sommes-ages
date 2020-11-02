<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="mb-5" cols="12">
        <div id="box">
          <v-form>
            <v-row>
              <v-col lg="2" offset-lg="4">
                <v-text-field
                  hide-details="auto"
                  id="person1"
                  label="Personne 1"
                  outlined type="number" v-model.number="personAge1"
                  @change="process"
                ></v-text-field>
              </v-col>
              <v-col lg="2">
                <v-text-field
                  hide-details="auto"
                  id="person2"
                  label="Personne 2"
                  outlined type="number" v-model.number="personAge2"
                  @change="process"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-spacer class="mb-5"></v-spacer>
<!--            <v-btn
              @click="process"
              class="mb-8"
              color="primary"
              elevation="2"
              rounded
            >Mettre à jour
            </v-btn>-->
          </v-form>
          <v-row>
            <v-col lg="4" offset-lg="4">
              <v-simple-table dark dense fixed-header height="50vh">
                <template v-slot:default>
                  <thead>
                  <tr>
                    <td>Age</td>
                    <td>Somme</td>
                    <td>=</td>
                    <td>Somme</td>
                    <td>Age</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr :key="item.index" v-for="item in personAges">
                    <td>{{item.p1}}</td>
                    <td>{{item.p1Sum}}</td>
                    <td class="primary" v-if="item.p1Sum === item.p2Sum">✓</td>
                    <td class="red" v-else>✗</td>
                    <td>{{item.p2Sum}}</td>
                    <td>{{item.p2}}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ComparaisonAge',
  data () {
    return {
      personAges: [],
      personAge1: 1,
      personAge2: 1
    }
  },
  created: function () {
    this.process()
  },
  methods: {
    process () {
      let personAge1 = this.personAge1
      let personAge2 = this.personAge2

      // Avoid any infinite loop
      if (personAge1 < 1 || personAge2 < 1) {
        return
      }

      // reset global array of values
      this.personAges = []

      while (personAge2 < 100) {
        this.personAges.push(
          {
            p1: personAge1,
            p1Sum: this.sumString(personAge1),
            p2: personAge2,
            p2Sum: this.sumString(personAge2)
          })
        personAge1++
        personAge2++
      }
    },
    sumString (valueAsInteger) {
      // get array of Number.
      const integersToSum = String(valueAsInteger).split('').map(value => Number(value))

      let finalSum = 0
      while (finalSum === 0 || String(finalSum).length > 1) {
        if (finalSum === 0) {
          finalSum = integersToSum.reduce((accumulator, currentValue) => accumulator + currentValue)
        } else {
          return this.sumString(finalSum)
        }
      }
      return finalSum
    }
  }
}
</script>

<style lang="scss">
  /*#box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }*/

  label {
    /*border: whitesmoke solid 1px;*/

    input {
      border: #42b983 2px solid;
      border-radius: 20%;
    }
  }

  input {
    width: 40px;
    color: whitesmoke;
  }

  table {
    margin-top: 20px;
    text-align: center;

    td {
      width: 30px;
    }

    td:nth-child(odd) {
      background-color: #42b983;
    }
  }
</style>
