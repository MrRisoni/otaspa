export function selectCurrency(new_currency) {
    return { type: 'SELECT_CURRENCY', payload: new_currency }
}