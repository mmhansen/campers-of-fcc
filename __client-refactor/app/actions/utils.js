export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 403) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login with an admin account.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}
