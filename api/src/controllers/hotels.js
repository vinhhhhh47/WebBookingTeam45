import * as hotelService from '../services/hotels'

export const getHotels = async (req, res) =>{
    const {address, daystart, dayend}=req.body
    try {
        
        if( !address || !daystart|| !dayend){ 
            return res.status(400).json({
            err:1,
            msg:'missing inputs!'
          
          })}

        const response = await hotelService.getHotelsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err:-1,
            msg:'Failed at hotel controller'
        })

    }
}