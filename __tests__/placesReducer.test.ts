import reducer from '../src/store/reducers/places';
import {
  PlacesActionTypes,
  ADD_PLACE,
  AddPlaceAction,
  DELETE_PLACE,
  DeletePlaceAction
} from '../src/store/actions/actionTypes';
import expect from 'expect';

global.Math.random = () => 0.5;

describe('test reducer', () => {
  it('should handle ADD_PLACE', () => {
    const addPlaceAction: AddPlaceAction = {
      type: ADD_PLACE,
      placeName: 'Beijing'
    };
    expect(reducer({ places: [], selectedPlace: undefined }, addPlaceAction)).toEqual({
      places: [
        {
          key: Math.random().toString(),
          name: 'Beijing',
          image: {
            uri:
              'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }
        }
      ],
      selectedPlace: undefined
    });
  });
  it('should handle DELETE_PLACE', () => {
    const deletePlaceAction: DeletePlaceAction = {
      type: DELETE_PLACE
    };
    expect(
      reducer(
        {
          places: [
            {
              key: '12345',
              name: 'Beijing',
              image: {
                uri:
                  'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              }
            }
          ],
          selectedPlace: {
            key: '12345',
            name: 'Beijing',
            image: {
              uri:
                'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            }
          }
        },
        deletePlaceAction
      )
    ).toEqual({
      places: [],
      selectedPlace: undefined
    });
  });
});
