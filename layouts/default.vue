<template lang="pug">

  v-app

    v-app-bar(
      dark
      dense
      fixed
      app
    )

      v-toolbar-title(
        v-text="applicationName"
      )

    //- Inject pages here
    v-main
      v-container.fill-height(fluid)
        nuxt

    v-footer(
      absolute=true
      app
    )
      span &copy; {{ year }} {{ companyName }}

</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      applicationName: 'app/getApplicationName',
      companyName: 'app/getCompanyName',
      year: 'app/getYear'
    }),
  }
}
</script>
