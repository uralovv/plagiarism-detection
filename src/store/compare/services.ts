import { AxiosResponse } from 'axios';
import compare from '../../core/api/compare';
import { ComparedDocumentResult } from './types/ComparedDocument';

export const getCompareByScore = (): Promise<AxiosResponse<ComparedDocumentResult>> => compare.get('');
