<template>
  <div>
    <NavBar />
    <NavigationDrawer />
    <CreateStreamButton />
    <GenreSelect />
    <LiveStreams />
    <TopFive />
  </div> 
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import NavBar from '@/components/NavBar.vue'
import LiveStreams from '@/components/LiveStreams.vue'
import GenreSelect from '@/components/GenreSelect.vue'
import TopFive from '@/components/TopFive.vue'
import CreateStreamButton from '@/components/CreateStreamButton.vue'

export default {
  components: {
    Logo,
    NavigationDrawer,
    NavBar,
    LiveStreams,
    GenreSelect,
    TopFive,
    CreateStreamButton
  },
  data () {
    return {
      name: ''
    }
  },
}

</script>
