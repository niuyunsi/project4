import {
  PlacesActionTypes,
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from './actionTypes';

export const addPlace = (placeName: string): PlacesActionTypes => {
  return {
    type: ADD_PLACE,
    placeName: placeName
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
    placeKey: key
  };
};

export const deselectPlace = (): PlacesActionTypes => {
  return {
    type: DESELECT_PLACE
  };
};
