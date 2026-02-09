import { Injectable } from '@nestjs/common';
import statementMock from '../data.mock.json';
import { IStatementData, IStatementRecord } from '../interfaces';

@Injectable()
export class Statements {
  private statementData: IStatementData = statementMock as IStatementData;

  getStatement(): IStatementData {
    const response = this.statementData;

    return response;
  }

  addStatement(statement: IStatementRecord): void {
    this.statementData.statement.push(statement);
  }
}
