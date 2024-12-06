import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
createAsyncThunk('api/data',()=>{

    return axios.get('http://localhost:8090/data')
        .then((response)=>{

            return response.data
        })
})

                                                                                                                                                                                                                                                                                                                                    







const dataInfoSice = createSlice({

    name:'data',
    initialState:0,
    dataI
}
)

export default store


