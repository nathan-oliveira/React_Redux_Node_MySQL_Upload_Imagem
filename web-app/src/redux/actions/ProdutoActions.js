import axios from 'axios'

const URL = "http://localhost:4000/produtos"

export const showProduct = () => {
  return(dispatch, getState) => {
    axios.get(URL)
      .then((response) => {
        if(response != null) {
          dispatch({ type: 'SHOW_PRODUCT',  payload: response.data.dados})
        }
      })
  }
}

export const saveProduct = (data) => {
  return (dispatch, getState) => {
    axios.post(URL, data)
      .then(response => dispatch(showProduct()))
  }
}

export const deleteProduct = (id) => {
  return (dispatch, getState) => {
    axios.delete(`${URL}/${id}`)
      .then(response => dispatch(showProduct()))
  }
}