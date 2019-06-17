//import {takeLatest} from 'redux-saga'
import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import {
    dispatcher
} from './app.utils'
// const setData = (id, data) => localStorage.setItem(id, JSON.stringify(data))
export function* addDataAsync(action) {     // function get call is here
    const { url, data, typeOnSuccess, maxPage, page } = action.payload
    console.log(data)
    try {
        const res = yield call(axios, {
            method: 'post',
            url: url,
            data: data,
        })
        yield put(dispatcher(typeOnSuccess, { data, reData: res.data[0], maxPage, page }))
    } catch (e) {
        console.log(e)
        try {
            if (e.response.status === 401) {
                yield put(dispatcher('$$ui-TOGGLE_LOGIN_STATE', false))
                yield put(dispatcher('$$ui-TOGGLE_INIT_INFO_STATE', false));
                //setData('isLogout', false);
            }
        } catch (e) {

        }
    }
}

export function* updateDataAsync(action) {                                            // function get call is here
    const { url, data, typeOnSuccess } = action.payload
    try {
        yield call(axios, {
            method: 'post',
            url: url,
            data: data,
        })
        console.log(data)
        yield put(dispatcher(typeOnSuccess, { data: data }))
    } catch (e) {
        console.log(e)
        try {
            if (e.response.status === 401) {
                yield put(dispatcher('$$ui-TOGGLE_LOGIN_STATE', false))
                yield put(dispatcher('$$ui-TOGGLE_INIT_INFO_STATE', false));
            }
        } catch (e) {

        }

    }
}

export function* getDataAsync(action) {                                            // function get call is here
    // console.log(action)
    const { payload: { url, typeOnSuccess } } = action
    try {
        console.log('run')
        const { data } = yield call(axios.get, url) // getInfo/sale/saleType/saleTable
        yield put(dispatcher(typeOnSuccess, { data }))
        //if(sales.data.length)yield put(dispatcher('$$ui-SET_PAGE', data.length,'saga'));

    } catch (e) {
        try {
            if (e.response.status === 401) {

            }
        } catch (e) {

        }
    }
}
/**
 * 
 * 
 * 
 * 
 */
export function* getSalesAsync(action) {                                            // function get call is here
    // console.log(action)
    const { payload: { saleType, user } } = action
    try {
        const sales = yield call(axios.get, `/apipdc/getInfo/mains/oms_sale/${saleType}`) // getInfo/sale/saleType/saleTable
        const details = yield call(axios.get, `/apipdc/getInfo/details/oms_sale/${saleType}`) // getInfo/sale_detail/saleType/saleTable
        //const data = user.role ==='admin' ? sales.data : sales.data.filter(data => data.employee === user.id)
        yield put(dispatcher('$$mw-INIT_SALE_SHOP_SUCCESS', { success: true, sales: sales.data, details: details.data, saleType }))
        //if(sales.data.length)yield put(dispatcher('$$ui-SET_PAGE', data.length,'saga'));

    } catch (e) {
        console.log(e.response.status)
        try {
            if (e.response.status === 401) {
                yield put(dispatcher('$$ui-TOGGLE_LOGIN_STATE', false))
                yield put(dispatcher('$$ui-TOGGLE_INIT_INFO_STATE', false));

            }
        } catch (e) {

        }

    }
}

export function* initSewingfinanceAsync(action) {                                            // function get call is here
    const { financeType, user } = action.payload
    console.log(financeType)
    try {
        const sewingFinanceBookings = yield call(axios.get, `/apipdc/getInfo/mains/sewing_finance_booking/${financeType}`)
        const sewingFinanceBookingDetails = yield call(axios.get, `/apipdc/getInfo/details/sewing_finance_booking/${financeType}`)
        const data = user.role === 'admin' ? sewingFinanceBookings.data : sewingFinanceBookings.data.filter(data => data.accountant_id === user.id)
        yield put(dispatcher('$$mw-INIT_SEWING_FINANCE_SUCCESS', {
            success: true, sewingFinanceBookings: data,
            sewingFinanceBookingDetails: sewingFinanceBookingDetails.data,
            financeType
        }))
        if (sewingFinanceBookings.data.length) yield put(dispatcher('$$ui-SET_PAGE', sewingFinanceBookings.data.length, 'sewingSaga'));
    } catch (e) {
        //console.log(e)
        try {
            if (e.response.status === 401) {
                yield put(dispatcher('$$ui-TOGGLE_LOGIN_STATE', false))
                yield put(dispatcher('$$ui-TOGGLE_INIT_INFO_STATE', false));
            }
        } catch (e) {

        }

    }
}
export function* initInfosAsync(action) {                                            // function get call is here
    try {
        const users = yield call(axios.get, '/apipdc/getInfo/oms_info_employee')
        const products = yield call(axios.get, '/apipdc/getInfo/info_product')
        const accountNames = yield call(axios.get, '/apipdc/getInfo/sewing_finance_info_account_name/name') //name is param 2 to short
        const budgetCood = yield call(axios.get, '/apipdc/getInfo/sewing_finance_info_budget_code/code')
        //const status = (res.status)
        yield put(dispatcher('$$mw-INIT_INFOS_SUCCESS', { success: true, users: users.data, products: products.data, accountNames: accountNames.data, budgetCodes: budgetCood.data }))
    } catch (e) {
        console.log(e)
        try {
            if (!e.response) {
                yield put(dispatcher('$$mw-INIT_INFOS_FAIL'));
                return false;
            }
            if (e.response.status === 401) {
                yield put(dispatcher('$$ui-TOGGLE_LOGIN_STATE', false))
                yield put(dispatcher('$$ui-TOGGLE_INIT_INFO_STATE', false));
            }
        } catch (e) {

        }


    }
}


/**
 * 
 * 
 * 
 * 
 */

export function* loginAsync(action) {                                            // function get call is here
    try {
        const res = yield call(axios, {
            method: 'post',
            url: '/apipdc/login',
            headers: {
                "Authorization": "cm9vdDp0MDBy",
            },
            data: action.payload,
        })
        //console.log(res.data)
        yield put(dispatcher('$$mw-LOGIN_SUCCESS', { status: true, data: res.data[0] }))
    } catch (e) {
        //yield put(dispatcher('LOGIN_SUCCESS', { status: false, token: null }))
        //console.log(e)
    }
}

export function* isLoginSuccessAsync(action) {                                            // function get call is here
    // console.log(action.payload)
    try {
        const res = yield call(axios, {
            method: 'post',
            url: '/apipdc/isLogin',
            // headers: {
            //     "Content-Type": 'application/json',
            //     'Authorization': 'abc',
            // },
            data: action.payload,
        })

        //const status = (res.status)
        yield put(dispatcher('$$mw-USER_IS_LOGED_IN', true))
    } catch (e) {
        try {

            yield put(dispatcher('$$mw-USER_IS_LOGGED_OUT', false))
        } catch (e) {
            console.log(e)
        }
    }
}

export function* logoutAsync(action) {                                            // function get call is here
    try {
        yield call(axios, {
            method: 'get',
            url: '/apipdc/logout',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': 'abc',
            },
        })
        // console.log(res)
        //const status = (res.status)
        yield put(dispatcher('$$mw-LOGOUT_SUCCESS', { logInstatus: false, token: null }))
    } catch (e) {
        //console.log(e)
    }
}

export function* watchLoadData() {
    //console.log('run')
    yield takeLatest('$$api-INIT_SALE_ASYNC', getSalesAsync)                              // React get call here
    yield takeLatest('$$api-INIT_INFOS_ASYNC', initInfosAsync)                              // React get call here
    yield takeLatest('$$api-INIT_SEWING_FINANCE_ASYNC', initSewingfinanceAsync)                              // React get call here

    yield takeEvery('$$api-GET_DATA_ASYNC', getDataAsync)                              // React get call here

    yield takeLatest('$$api-UPDATE_DATA_ASYNC', updateDataAsync)                              // React get call here
    yield takeLatest('$$api-ADD_DATA_ASYNC', addDataAsync)                              // React get call here

    yield takeLatest('$$api-POST_LOGIN_ASYNC', loginAsync)                              // React get call here
    yield takeLatest('$$api-CHECK_LOGIN_ASYNC', isLoginSuccessAsync)                              // React get call here
    yield takeLatest('$$api-LOGOUT_ASYNC', logoutAsync)                              // React get call here

}

export default function* rootSaga() {                                         // saga root assignment
    yield all([watchLoadData()])
}