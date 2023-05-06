import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesAsync = createAsyncThunk(
    'getImages',
    async ({category, page}: any) => {
        try {
            const res = await axios.get('/images/getImages',{
                params: {
                  category: category,
                  page: page
                }
              });

              return res.data.hits

        } catch (error) {
            console.error(error);
            
        }
    }
)