<template>
  <div class="layout-left">
    <button class="btn btn-light btn-light-top">
      <span
        ><i class="fa fa-chevron-left"></i>Powrót do zarządzania
        prezentacją</span
      >
    </button>
    <h3>Generator PDFa</h3>
    <div class="form-group">
      Wybierz pola które chcesz umieścić w swoim wygenerowanym PDFie i kliknij
      generuj. Aplikacja wykona za Ciebie całą resztę.
    </div>
    <div class="form-group">
      <label class="heading">Nazwa</label>
      <input type="text" class="form-control" placeholder="Moja Oferta" />
    </div>
    <div class="checkboxes-div form-group">
      <label class="heading">Dołączyć kontakt?:</label>
      <div class="checkboxes">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Telefon" />
          <label class="form-check-label" for="Telefon">Telefon</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Email" />
          <label class="form-check-label" for="Email">Email</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="facebook" />
          <label class="form-check-label" for="facebook">facebook</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Youtube" />
          <label class="form-check-label" for="Youtube">Youtube</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Strona WWW" />
          <label class="form-check-label" for="Strona WWW">Strona_WWW</label>
        </div>
      </div>
    </div>

    <!-- Informacje Organizacyjne -->
    <div class="checkboxes-div form-group">
      <label class="heading">Informacje organizacyjne:</label>
      <div class="checkboxes">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Próba" />
          <label class="form-check-label" for="Próba">Próba</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Garderoba" />
          <label class="form-check-label" for="Garderoba">Garderoba</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Catering" />
          <label class="form-check-label" for="Catering">Catering</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Zakwaterowanie" />
          <label class="form-check-label" for="Zakwaterowanie"
            >Zakwaterowanie</label
          >
        </div>
      </div>
    </div>

    <!-- Wybierz cennik -->
    <div class="checkboxes-div form-group">
      <label class="heading">Wybierz cennik:</label>
      <div class="checkboxes cennik">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Cennik Test" />
          <label class="form-check-label heading" for="Cennik Test"
            >Cennik Test</label
          >
          <p>
            Od ponad 20 lat pracuję z mikrofonem, zrealizowałem ponad 1000
            eventów. Jestem aktorem, mam na koncie kilkadziesiąt ról teatralnych
            i filmowych
          </p>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="Cennik Test" />
          <label class="form-check-label heading" for="Cennik Test"
            >Cennik Test</label
          >
          <p>
            Od ponad 20 lat pracuję z mikrofonem, zrealizowałem ponad 1000
            eventów. Jestem aktorem, mam na koncie kilkadziesiąt ról teatralnych
            i filmowych
          </p>
        </div>
      </div>
    </div>

    <!-- Lower buttons -->
    <div class="lower-buttons">
      <div class="lower-buttons__top">
        <div>
          <button class="btn btn-light btn-light-bottom  btn-block">
            Zapisz
          </button>
        </div>
        <div>
          <button class="btn btn-light btn-light-bottom btn-block">
            Wygeneruj
          </button>
        </div>
      </div>
      <br />
      <div>
        <button class="btn btn-success btn-sm btn-block">
          Wygeneruj i zapisz
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.layout-left {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
}
.checkboxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
}
.cennik {
  display: flex;
  flex-direction: column;
}
.heading {
  font-weight: bold;
}

/* Top button */
.btn-light-top {
  width: fit-content;
  margin: 3vh 0;
  font-size: 0.7rem;
  border: 1px solid lightgrey;
}
.fa-chevron-left {
  padding-right: 1vw;
}

/* Lower buttons */
.lower-buttons {
  display: flex;
  flex-direction: column;
}
.lower-buttons__top {
  display: flex;
  justify-content: space-between;
}
.btn-light-bottom {
  padding: 1vh 2vw;
  border: 1px solid lightgrey;
}
</style>
