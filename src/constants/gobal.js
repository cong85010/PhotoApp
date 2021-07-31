export const PHOTO__APP_CATAGORY_OPTIONS = [
    {value: 1, label: 'Technology'},
    {value: 2, label: 'Education'},
    {value: 3, label: 'Nature'},
    {value: 4, label: 'Animals'},
    {value: 5, label: 'Styles'},
    {value: 6, label: 'Sky'},
    {value: 7, label: 'Life'},
]
export const getLabelFromValue = (value) => {
    return value === null ? '':PHOTO__APP_CATAGORY_OPTIONS.find(item => item.value === value).label
}