export interface DepositInput {
  amount: number
  months: number
  rate: number
}

export interface DepositResult {
  total: number
  profit: number
}