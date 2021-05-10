export type ComparedDocument = {
  readonly id: string;
  readonly First_document: string;
  readonly Second_documents: string;
  readonly Plagiarism_Score: number;
};

export type ComparedDocumentResult = {
  readonly Results: ReadonlyArray<ComparedDocument>;
};
