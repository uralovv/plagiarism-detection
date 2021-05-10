import { declareAction } from '@reatom/core';
import { getCompareByScore } from './services';
import { ComparedDocumentResult } from './types/ComparedDocument';

export const getCompareByScoreFail = declareAction<any>();
export const getCompareByScoreSuccess = declareAction<ComparedDocumentResult>();
export const getCompareByScoreNotAsked = declareAction();
export const getCompareByScoreRequest = declareAction(
    async (payload, store) =>
        await getCompareByScore()
            // tslint:disable-next-line:ter-arrow-parens
            .then((res) => store.dispatch(getCompareByScoreSuccess(res.data)))
            // tslint:disable-next-line:ter-arrow-parens
            .catch((err) => store.dispatch(getCompareByScoreFail(err))),
);
