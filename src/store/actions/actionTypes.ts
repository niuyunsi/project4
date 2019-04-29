export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const SELECT_PLACE = 'SELECT_PLACE';
export const DESELECT_PLACE = 'DESELECT_PLACE';

export interface AddPlaceAction {
  type: typeof ADD_PLACE;
  name: string;
}

export interface DeletePlaceAction {
  type: typeof DELETE_PLACE;
}

export interface SelectPlaceAction {
  type: typeof SELECT_PLACE;
  key: string;
}

export interface DeselectPlaceAction {
  type: typeof DESELECT_PLACE;
}

export type PlacesActionTypes =
  | AddPlaceAction
  | DeletePlaceAction
  | SelectPlaceAction
  | DeselectPlaceAction;
