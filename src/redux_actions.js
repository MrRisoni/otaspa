export function getUpsales() {
    return {
        type: "GET_UPSALES",
        payload: [
            {
                id: 1,
                title: 'SMS',
                price: 1.5,
                selected: false
            },
            {
                id: 2,
                title: 'Web check-in',
                price: 3,
                selected: false
            }
        ]
    }
}
