<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container">
      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <div>
          <ul class="navbar-nav">
            <li class="nav-item brand">
              <a class="nav-link" href="#">Artostrada.pl</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-home"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artyści</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skrzynka kontaktowa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kontakt</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Twoje prezentacje</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-cog"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span
                  ><i class="fa fa-power-off"></i> Wyloguj(Imię Nazwisko)</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.navbar {
  font-size: 0.9rem;
}
.navbar-collapse {
  display: flex;
  justify-content: space-between;
}
.nav-item {
  padding: 0 0.3vw;
}
.brand {
  margin-left: -0.8vw;
}
</style>
