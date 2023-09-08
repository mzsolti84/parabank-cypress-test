export enum EndPointsEnum {
  IMAGES = "**/images/**",
  LOGIN = "**/services/bank/login/**",
  ACCOUNT = "**/accounts",
}

export function getKeyByValue(value: string): string {
  const indexOfV: number = Object.values(EndPointsEnum).indexOf(value as unknown as EndPointsEnum)
  const key: string = Object.keys(EndPointsEnum)[indexOfV]
  return key
}

export function getValueByKey(key: string): string {
  const indexOfK = Object.keys(EndPointsEnum).indexOf(key)
  const value: string = Object.values(EndPointsEnum)[indexOfK]
  return value
}