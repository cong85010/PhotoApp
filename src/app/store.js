import photoReducer from 'features/Photo/Photoslice';
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    photos: photoReducer
}
const store  = configureStore({
    reducer: rootReducer,

})

export default store