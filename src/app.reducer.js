const initState = {
    user: {},
    spinnerState: false,
    isLoginSuccess: undefined, // undefined require becuase we dont want to show glitch and reload
    initInfoState: false,
    page: 1,
    maxPage: 1,
    showEditDetailForm: false,
    editDetailValues: {},
    toggleWrapperForm: false,
    showAddOrEditForm: false,
    editData: {},
    listFieldTypeAhead: {},
    logout: false,
    toggleFormFocusState: false,
    initExpenseSuccess: false,
    printState: null,
    inventoryData: [],
    reportCashier: [],
    reportProduct: [],
    reportCashIn: [],
    reportAdvanceGm: [],
    reportAdvanceIg: [],
    reportExpense: [],
}

export const appReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case '$$ui-TOGGLE_SPINNER':
            return state = { ...state, spinnerState: payload }; // set @spinner
        case '$$model-SET_USER':
            return state = { ...state, user: payload.data, }; //@loggin @spinner
        case '$$ui-TOGGLE_LOGIN_STATE':
            return state = { ...state, isLoginSuccess: payload, }; //@loggin @spinner
        case '$$ui-TOGGLE_INIT_INFO_STATE':
            return state = { ...state, initInfoState: payload, }; //@loggin

        case '$$ui-TOGGLE_LOGOUT_STATE':
            return state = { ...state, logout: payload, }; //@loggin @spinner
        case '$$ui-CLEAR_UI_STATE':
            return state = { ...state, ...initState, }; //@loggin @spinner

        case '$$ui-SET_LIST_EDIT_DATA': // @form ued in list
            return state = { ...state, editData: payload }
        case '$$ui-CLEAR_MAIN_FORM_DATA':
            return state = { ...state, editData: { tag: Math.random() } }; // set $page clear @form editdata
        case '$$ui-SET_TYPEAHEAD_DATA': // @form ued in list
            return state = { ...state, listFieldTypeAhead: payload.listFieldTypeAhead }

        case '$$ui-SET_DETAIL_FORM_DATA': //set @form value
            return state = { ...state, editDetailValues: payload.data }
        case '$$ui-TOGGLE_EDIT_DETAIL_FORM':
            return state = { ...state, showEditDetailForm: payload } //clear @form value
        case '$$ui-CLEAR_DETAIL_FORM_DATA':
            return state = { ...state, editDetailValues: { tag: Math.random() } } //clear @form value

        case '$$ui-SET_PAGE':
            return state = { ...state, page: payload }; //set @page
        case '$$ui-SET_MAX_PAGE':
            return state = { ...state, maxPage: payload } //set @page USED ONLY IN LIST // component life cycle TODO:


        case '$$ui-TOGGLE_DISABLE_PRINT':
            return state = { ...state, toggleFormFocusState: payload } // should be recordOnChangeDisablePrint
        case '$$ui-USER_IS_LOGGED_OUT':
            return state = { ...state, ...initState } // should be recordOnChangeDisablePrint
        case '$$ui-SET_PRINT_CLASSNAME':
            return state = { ...state, printState: payload } // should be recordOnChangeDisablePrint
        case '$$ui-GET_INVETORY_SUCCESS':
            return state = { ...state, inventoryData: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_CASHIER_SUCCESS':
            return state = { ...state, reportCashier: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_PRODUCT_SUCCESS':
            return state = { ...state, reportProduct: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_CASHIN_SUCCESS':
            return state = { ...state, reportCashIn: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_ADVANCE_GM_SUCCESS':
            return state = { ...state, reportAdvanceGm: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_ADVANCE_IG_SUCCESS':
            return state = { ...state, reportAdvanceIg: payload.data } // should be recordOnChangeDisablePrint
        case '$$ui-GET_REPORT_EXPENSE_SUCCESS':
            return state = { ...state, reportExpense: payload.data } // should be recordOnChangeDisablePrint
        default:
            return state
    }
}
