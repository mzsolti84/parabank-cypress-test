# Parabank Teszt
## Rendszerkövetelmények

### Operációs rendszer:

* macOS 10.9 és felette
* Linux Ubuntu 12.04 és felette, Fedora 21 és Debian 8
* Windows 7 és felette (64-bit csak)
* Node.js: 14.x/16.x/18.x és felette

## Kezdőlépések:

* fájlok letöltése
* allure telepítése (https://docs.qameta.io/allure/)
* npm install


## Cypress teszt futtatási módszerek:

* npx cypress open:demo -> E2E testing kiválasztása -> Böngésző kiválasztása -> Futtatandó fájl kiválasztása
* npx cypress run (konzolos futtatás)

## Report készítése a tesztekről:

- npm run allure:all:demo
<br>
További parancsok találhatóak a package.json fájlban.