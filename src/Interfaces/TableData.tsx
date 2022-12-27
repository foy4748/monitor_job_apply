export interface TableRow {
  date: string;
  appliedJobs: number;
  submittedTasks: number;
  interviews: number;
  rejections: number;
}

export interface TableRows {
  id: string;
  name: string;
  dataRows: TableRow[];
}
