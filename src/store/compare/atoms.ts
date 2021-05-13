import { declareAtom } from '@reatom/core';
import { RemoteData } from 'remote-data-ts';
import { getCompareByScoreRequest, getCompareByScoreSuccess, getCompareByScoreFail, getCompareByScoreNotAsked } from './actions';
import { ComparedDocument } from './types/ComparedDocument';

export const compareByScore = declareAtom<RemoteData<ReadonlyArray<ComparedDocument>, any>>(
    RemoteData.notAsked(),
    // tslint:disable-next-line:ter-arrow-parens
    (on) => [
      on(getCompareByScoreRequest, () => RemoteData.loading()),
      on(getCompareByScoreSuccess, (_, payload) => RemoteData.success(payload)),
      on(getCompareByScoreFail, (_, payload) => RemoteData.failure(payload)),
      on(getCompareByScoreNotAsked, () => RemoteData.notAsked()),
    ],
);
