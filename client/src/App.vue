<template>
  <nav>
    <router-link to="/">Форма добавления</router-link>
    <router-link to="/SummaryTable">Сводная таблица</router-link>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  font-size: 1.2em;
}
nav {
  position: absolute;
  left: 32.6%;
  width: 35%;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  a {
    display: block;
    width: 50%;
    text-decoration: none;
    color: #000;
    background: #9f9f9f;
    font-size: 1em;
    border-bottom: 1px solid#000;
    &:first-child {
      padding: 2vh 0.5vw 2vh 1vw;
      border-left: 1px solid#000;
      border-radius: 0 0 0 30px;
    }
    &:last-child {
      padding: 2vh 1vw 2vh 0.5vw;
      border-right: 1px solid#000;
      border-radius: 0 0 30px 0;
    }
    &.router-link-exact-active {
      background: #ececec;
      box-shadow: inset 0 0 5px 0;
      border: none;
    }
  }
}
</style>
