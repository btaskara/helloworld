var mockApiData = [
  {
    id: 1,
    name: 'Starry Night',
    url: 'http://moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjEvaWJ3dmJmanIyX3N0YXJyeW5pZ2h0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ/starrynight.jpg?sha=161d3d1fb5eb4b23'
  },
  {
    id: 2,
    name: 'Cornice',
    url:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cornice-christopher-triner.jpg'
  },
  {
    id: 3,
    name: 'Looking glass',
    url:'https://d2jv9003bew7ag.cloudfront.net/uploads/Guido-Borelli-Image-via-Lookingglass-photo-com.jpg'
  },
  {
    id: 4,
    name: 'Painting',
    url: 'http://www.book530.com/paintingpic/0615/Canvas_paintings_for_sale_canvas_paintings_art_gallery.jpg'
  },
  {
    id: 5,
    name: 'Kid',
    url:'https://i.pinimg.com/736x/b2/b9/0e/b2b90edc1aaf8df71df1d35bf39996c3--art-project-for-kids-project-ideas.jpg'
  }

];

export const getTracks = () =>dispatch=>  {

    setTimeout(() => {
      console.log('I got tracks');
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
    }, 1000)

};
