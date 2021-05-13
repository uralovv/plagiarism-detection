import { declareAction } from '@reatom/core';
import { getCompareByScore } from './services';
import { ComparedDocument } from './types/ComparedDocument';

export const getCompareByScoreFail = declareAction<any>();
export const getCompareByScoreSuccess = declareAction<ReadonlyArray<ComparedDocument>>();
export const getCompareByScoreNotAsked = declareAction();
export const getCompareByScoreRequest = declareAction<{readonly score: string}>(
    async (payload, store) => {
      const { score } = payload;
        console.log(Number(score));
      return await getCompareByScore()
            // tslint:disable-next-line:ter-arrow-parens
            .then((res) =>
                      store.dispatch(getCompareByScoreSuccess(
                          res.data.Results.filter(
                              // tslint:disable-next-line:ter-arrow-parens
                              (res) => res.Plagiarism_Score >= Number(score)))))
            // tslint:disable-next-line:ter-arrow-parens
            .catch((err) => store.dispatch(getCompareByScoreFail(err)));
    });
