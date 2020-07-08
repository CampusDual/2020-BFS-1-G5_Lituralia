export interface OntimizeResponse<T> {
  code: number;
  data: Array<T>;
  message: '';
  sqlTypes?: Object;
  startRecordIndex?: number;
  totalQueryRecordsNumber?: number;
}
