import * as optionAnswers from './option-answers.actions';
import * as optionAnswersUtil from './option-answers-util';
import * as _ from 'lodash';
import {appInitialState} from '../app.state';
import {IOptionAnswersMap, IOptionAnswersMapMap} from '../../models/option-answers.model';

export function reducer(state = appInitialState.optionAnswers, action: optionAnswers.Actions): IOptionAnswersMapMap {

  switch (action.type) {

    case optionAnswers.OptionAnswersActionTypes.QUESTION_ADD_OPTION_ANSWERS_ACTION: {
      const { elementId } = action.payload;
      const prevOptionAnswers: IOptionAnswersMap = state.get(elementId);
      let newOptionAnswers: IOptionAnswersMap;

      if (!prevOptionAnswers) {
        newOptionAnswers = optionAnswersUtil.createNewOptionAnswersMap(elementId);
      } else {
        newOptionAnswers = optionAnswersUtil.addOptionAnswer(elementId, prevOptionAnswers);
      }

      state.set(elementId, newOptionAnswers);

      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_ACTION: {
      const { elementId, optionAnswerId } = action.payload;
      const prevOptionAnswers: IOptionAnswersMap = state.get(elementId);
      const newOptionAnswers: IOptionAnswersMap = optionAnswersUtil.removeOptionAnswer(optionAnswerId, prevOptionAnswers);

      state.set(elementId, newOptionAnswers);

      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_MAP_ACTION: {
      const { elementId } = action.payload;
      state.delete(elementId);
      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_MAPS_ACTION: {
      const { elementIds } = action.payload;
      elementIds.forEach(id => state.delete(id));
      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.QUESTION_ADD_OPTION_ANSWERS_VALUE_ACTION: {
      const { elementId, optionAnswerId, value } = action.payload;
      const prevOptionAnswers: IOptionAnswersMap = state.get(elementId);
      const newOptionAnswers: IOptionAnswersMap = optionAnswersUtil.addOptionAnswerValue(
        optionAnswerId, value, prevOptionAnswers
      );

      state.set(elementId, newOptionAnswers);

      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.QUESTION_UPDATE_OPTION_ANSWERS_PAGE_FLOW: {
      const { elementId, optionAnswerId, pageFlow } = action.payload;
      const prevOptionAnswers: IOptionAnswersMap = state.get(elementId);
      const newOptionAnswers: IOptionAnswersMap = optionAnswersUtil.updateOptionAnswerPageFlow(optionAnswerId, pageFlow, prevOptionAnswers);

      state.set(elementId, newOptionAnswers);

      return Object.assign(state, _.cloneDeep(state));
    }

    case optionAnswers.OptionAnswersActionTypes.DRAG_OPTION_ANSWERS_ACTION: {
      const { elementId, startIndex, endIndex } = action.payload;
      const prevOptionAnswers: IOptionAnswersMap = state.get(elementId);
      const newOptionAnswers: IOptionAnswersMap = optionAnswersUtil.dragOptionAnswer(startIndex, endIndex, prevOptionAnswers);

      state.set(elementId, newOptionAnswers);

      return Object.assign(state, _.cloneDeep(state));
    }

    default: {
      return state;
    }
  }
}
