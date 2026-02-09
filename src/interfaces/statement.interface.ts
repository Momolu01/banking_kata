export interface IStatementRecord {
  date: string;
  amount: number;
  balance: number;
  type: 'credit' | 'debit';
}

export interface IStatementData {
  statement: IStatementRecord[];
}
