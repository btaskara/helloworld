
const initialState=[
    'Workout',
    'Sad songs'
  ]
export default function playlist(state = initialState,action){
  if(action.type=='ADD_PLAYLIST'){
    return state;
  }

  return state;
}
