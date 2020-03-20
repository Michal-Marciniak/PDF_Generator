<template>
  <div id="app">
    <Navbar></Navbar>
    <main class="layout container">
      <layoutLeft></layoutLeft>
      <layoutRight></layoutRight>
    </main>
    <footer class="text-center">
      <span>2020 <i class="fa fa-copyright"></i> Partymania.pl</span>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import layoutLeft from "./components/Layout/layoutLeft";
import layoutRight from "./components/Layout/layoutRight";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    layoutLeft,
    layoutRight
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  max-width: 1400px;
}

/******** Layout ********/
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1.5vw;
}
/******** End of Layout ********/

/******** Footer ********/
footer {
  margin: 5vh auto;
  font-size: 0.8rem;
  color: gray;
}
</style>
