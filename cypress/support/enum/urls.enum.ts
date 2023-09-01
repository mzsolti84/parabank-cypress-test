export enum UrlsEnum {
  LOGIN = "**/services/bank/login/",
}

export function getKeyByValue(value: string): string {
  const indexOfV: number = Object.values(UrlsEnum).indexOf(value as unknown as UrlsEnum)
  const key: string = Object.keys(UrlsEnum)[indexOfV]
  return key
}

export function getValueByKey(key: string): string {
  const indexOfK = Object.keys(UrlsEnum).indexOf(key)
  const value: string = Object.values(UrlsEnum)[indexOfK]
  return value
}
