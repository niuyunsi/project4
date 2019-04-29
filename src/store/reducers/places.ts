import { ImageSourcePropType } from 'react-native';

import {
  PlacesActionTypes,
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  AddPlaceAction,
  DeletePlaceAction,
  SelectPlaceAction,
  DeselectPlaceAction
} from '../actions/actionTypes';

export interface Place {
  key: string;
  name: string;
  image: ImageSourcePropType;
}

export interface PlacesState {
  places: Place[];
  selectedPlace?: Place;
}

const initialState = {
  places: [],
  selectedPlace: undefined
};

const reducer = (state: PlacesState = initialState, action: PlacesActionTypes) => {
  switch (action.type) {
    case ADD_PLACE:
      return handleAddPlaceAction(state, action);
    case DELETE_PLACE:
      return handleDeletePlaceAction(state, action);
    case SELECT_PLACE:
      return handleSelectPlaceAction(state, action);
    case DESELECT_PLACE:
      return handleDeselectPlaceAction(state, action);
    default:
      return state;
  }
};

const handleAddPlaceAction = (state: PlacesState, action: AddPlaceAction) => {
  return {
    ...state,
    places: [
      ...state.places,
      {
        key: Math.random().toString(),
        name: action.name,
        image: {
          uri:
            'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        }
      }
    ]
  };
};

const handleDeletePlaceAction = (state: PlacesState, action: DeletePlaceAction) => {
  return {
    ...state,
    places: state.places.filter(place => {
      return place.key !== (state.selectedPlace ? state.selectedPlace.key : undefined);
    }),
    selectedPlace: undefined
  };
};

const handleSelectPlaceAction = (state: PlacesState, action: SelectPlaceAction) => {
  return {
    ...state,
    selectedPlace: state.places.find((place: Place) => {
      return place.key === action.key;
    })
  };
};

const handleDeselectPlaceAction = (state: PlacesState, action: DeselectPlaceAction) => {
  return {
    ...state,
    selectedPlace: undefined
  };
};

export default reducer;
