const locators = {
    LOGIN: {
        TF_WORKSPACE : '#workspace',
        TF_USERNAME : '#username',
        TF_PASSWORD : '#password',
        BTN_LOGIN : '#submit_button'
    },
    MENU: {
        OP_LOCATIONS : '[href="/CenterWeb/serviceLocal"] > span'
    },
    LIST_LOCAL: {
        BTN_ADD : '#addServiceLocal',
        TF_SEARCH : '#genericFilter',
        BTN_SEARCH : '#serviceLocalList_doSearch',
        TD_FIRST_DESCRIPTION : '.odd > :nth-child(2)',
        TD_FIRST_BT_EDIT: '.edit-record-serviceLocal'
    },
    DETAIL_LOCAL: {
        TF_DESCRIPTION : '#serviceLocal_description',
        TF_CORPORATE_NAME : '#serviceLocal_corporateName',
        BTN_SAVE : '#formServiceLocal_doSave',
        CHK_ACTIVE: '#serviceLocal_active'
    }
}

export default locators;