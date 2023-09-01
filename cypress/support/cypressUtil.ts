import { EndPointsEnum } from "./enum/endPoints.enum"

let globalCount = 1

/**
 * A language környezeti változó és a hónap száma alapján visszatér a date picker-ben lévő szöveggel
 * @param month a hónap száma
 * @returns date picker választóban lévő megfelelő nyelvű szöveggel tér vissza
 */
export const getMonthFromNumber = (month: number): string => {
  let map: object
  if (Cypress.env("language") === "hu") {
    map = {
      1: "JAN.",
      2: "FEB.",
      3: "MÁRC.",
      4: "ÁPR.",
      5: "MÁJ.",
      6: "JÚN.",
      7: "JÚL.",
      8: "AUG.",
      9: "SZEPT.",
      10: "OKT.",
      11: "NOV.",
      12: "DEC.",
    }
  } else if (Cypress.env("language") === "en") {
    map = {
      1: "JAN",
      2: "FEB",
      3: "MAR",
      4: "APR",
      5: "MAY",
      6: "JUN",
      7: "JUL",
      8: "AUG",
      9: "SEP",
      10: "OCT",
      11: "NOV",
      12: "DEC",
    }
  }
  const monthString: string = String(map[month]) ?? "Nem található a keresett hónap!"
  return monthString
}

/**
 * HTML elemek szövegeiből készít tömböt
 * @param elements A HTML elemek
 * @returns Visszatér a HTML elemek szövegéből készített tömbel
 */
export const makeStringArrayFromHTMLElements = (elements: JQuery): Array<string> => {
  return Cypress.$.makeArray(elements).map((el) => el.innerText)
}

/**
 * Stringből tömb létrehozása
 * @param arrayString A string amiből a tömb készül
 * @returns Visszatár a strinből készült tömbel
 */
export const makeArrayFromString = (arrayString: string): Array<string> => {
  return arrayString.split(", ")
}

/**
 * Request-el létrehozott elemnek állítja be egy tulajdonságát egy globális változóba
 * @param entity a létrehozott elem
 * @param entityValue a létrehozott elem azonosítója
 */
export const setGlobalEntity = (entity: string, entityValue: string): void => {
  cy.task(entity, entityValue)
}

/**
 * String formátumú számban megvizsgálja van -e .00, ha nincs hozzáfűzi
 * @param arg0 a vizsgálni kívánt érték
 * @returns string
 */
export const parseFloatWhitZeros = (arg0: string): string => {
  if (arg0.search("/./gi") == -1) {
    return arg0.concat(".00")
  }
  return arg0
}

export const getBackendUrl = (endPoints: string): string => {
  const baseUrl: string = Cypress.config("baseUrl")
  return baseUrl + EndPointsEnum[endPoints]
}

 export const xmlProperty = (xml: string, property: string) => {
    return Cypress.$(Cypress.$.parseXML(xml)).find(property).text()
  }