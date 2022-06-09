enum SHOPPING_LIST_ACTIONS_TYPES {
    ADD_ITEM = 'ADICIONAR_ITEM',
    REMOVE_ITEM = 'REMOVER_ITEM'
}

interface ActionsProps {
    type: SHOPPING_LIST_ACTIONS_TYPES,
    payload: string
}

const addItem = (payload: string): ActionsProps => ({
        type: SHOPPING_LIST_ACTIONS_TYPES.ADD_ITEM,
        payload,
    })

export { addItem }

