import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

import axios from 'axios'
// fetchProducts  actions creator
export const getProducts = () => async dispatch => {
  // as soon as a request made dispatch pending state
  dispatch(fetchProductsRequest())

  try {
    const { data } = await axios.get('/api/products')

    dispatch(fetchProductsSuccess(data))
  } catch (error) {
    dispatch(fetchProductsFail(error))
  }
}

/* PRODUCT LIST ACTION CREATORS */

const fetchProductsRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  }
}

const fetchProductsSuccess = products => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  }
}

const fetchProductsFail = error => {
  return {
    type: PRODUCT_LIST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.messa,
  }
}

// fetch product by id
export const getProductById = id => async dispatch => {
  // as soon as a request made dispatch pending state
  dispatch(fetchProductDetailsRequest())

  try {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(fetchProductDetailsSuccess(data))
  } catch (error) {
    dispatch(fetchProductDetailsFail(error))
  }
}

/* PRODUCT DETAILS ACTION CREATORS */

const fetchProductDetailsRequest = () => {
  return {
    type: PRODUCT_DETAILS_REQUEST,
  }
}

const fetchProductDetailsSuccess = product => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: product,
  }
}

const fetchProductDetailsFail = error => {
  return {
    type: PRODUCT_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.messa,
  }
}
