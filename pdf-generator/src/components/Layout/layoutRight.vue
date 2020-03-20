<template>
  <div class="container layout-right">
    <div class="text-top">
      Wybierz elementy które chcesz zamieścić w PDF-ie
    </div>
    <div class="buttons-top">
      <div>
        <button class="btn btn-sm btn-primary">Domyślny</button>
      </div>
      <div>
        <button class="btn btn-light btn-sm">Występ</button>
      </div>
    </div>
    <div class="form-group">
      <label class="wysiwyg-opis heading heading-right">Opis</label>
      <wysiwyg></wysiwyg>
    </div>
    <div class="form-group">
      <label class="wysiwyg-opis heading heading-right">Wybierz zdjęcia:</label>
      <div class="images">
        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />

        <img src="../../../images/party.jpg" alt="party" />
      </div>
    </div>
  </div>
</template>

<script>
import wysiwyg from "../Wysiwyg/wysiwyg";

export default {
  components: {
    wysiwyg
  }
};
</script>

<style>
.layout-right {
  margin: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: left;
}
.text-top {
  margin-top: 8vh;
  margin-bottom: 1vh;
  font-size: 1.2rem;
}
.buttons-top {
  display: flex;
  margin: 3vh 0 4vh 0;
}
.wysiwyg-opis {
  margin-bottom: 2vh;
}
.heading-right {
  font-size: 0.8rem;
}

/******* Images *******/
.images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-column-gap: 1vw;
  grid-row-gap: 4vh;
}
img {
  border: 1px solid rgb(199, 188, 188);
  padding: 1.5vw;
  width: 185px;
  height: 185px;
  cursor: pointer;
}
</style>
