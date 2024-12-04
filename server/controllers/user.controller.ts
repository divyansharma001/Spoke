import { RegisterRequest } from "../types/registerRequest";


export const register = async(req: RegisterRequest, res: Response)=>{
  try {
    const {fullname, username, password, confirmPassword} = req.body;

  } catch (error) {
    
  }
}