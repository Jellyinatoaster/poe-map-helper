<template>
  <div id="shared-map-items-income-view" class="relative container mx-auto py-8">
    <back-button :label="'Back'" @on-click="goBack" />

    <h1 class="text-gray-300 text-center text-4xl mb-4 select-none">
      Map income report
    </h1>

    <map-details :map="sharedMapHistory.map" :character="share.character" class="mb-4" />

    <div class="max-w-2xl mx-auto p-4 rounded text-discord-100 bg-discord-700 shadow-2xl select-none">
      <map-income-table :items-diff-income="sharedMapHistory.items" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { POEPricedStashItem, POEMapHistory } from '@/models/PathOfExile';
import { ShareState } from '@/store/share/share.state';
import MapIncomeTable from '@/components/tables/MapIncomeTable.vue';
import MapDetails from '@/components/MapDetails.vue';
import BackButton from '@/components/ui-components/BackButton.vue';

@Component({
  components: {
    MapIncomeTable,
    MapDetails,
    BackButton,
  },
})
export default class SharedMapItemsIncomeView extends Vue {
  get mapParamIndex(): number {
    return parseInt(this.$route.params.id, 10);
  }

  get share(): ShareState {
    return this.$store.state.share;
  }

  get sharedMapHistory(): Readonly<POEMapHistory> {
    return this.share.mapsHistory[this.mapParamIndex];
  }

  public goBack() {
    this.$router.back();
  }
}
</script>
