import {
  PlacesActionTypes,
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from './actionTypes';

export const addPlace = (name: string): PlacesActionTypes => {
  return {
    type: ADD_PLACE,
    name: name
  };
};

export const deletePlace = (): PlacesActionTypes => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = (key: string): PlacesActionTypes => {
  return {
    type: SELECT_PLACE,
    key: key
  };
};

export const deselectPlace = (): PlacesActionTypes => {
  return {
    type: DESELECT_PLACE
  };
};
