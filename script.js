function OpenMenuSaves() {
  document.getElementById('saves').classList.toggle('open')
}

function OpenMenuSettings() {
  document.getElementById('settings').classList.toggle('open')
}

function LaunchGame() {
  document.getElementById('game-screen').classList.toggle('launched-game')
  document.getElementById('main').classList.toggle('launched-menu')
  document.getElementById('header').classList.toggle('launched-menu')
  document.getElementById('body').classList.toggle('launched-body')
}