import {User} from "../models/User.js"

export const register = async(req,res) => {
    const {email,password} = req.body


    try {
        //validar datos repetidos por email alternativa
        let user = await User.findOne({email})
        // if(user) throw {code:11000}
        if(user)  return res.status(400).json({error: "Ya existe este usuario"})
        
        user = new User({email,password})
        await user.save()

        //falta jwt

        return res.status(201).json({
            ok:true
        })
    } catch (error) {
        console.log(error.code)
        //alternativa validar datos repetidos por defecto mongoose
        // if(error.code === 11000){
        //     return res.status(400).json({error: "Ya existe este usuario"})
        // }
    }
    return res.status(500).json({error: "Error de servidor"})

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user)
            return res.status(403).json({ error: "No existe este usuario" });

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword)
            return res.status(403).json({ error: "Contraseña incorrecta" });

        // Generar el token JWT


        return res.status(201).json({
            ok:true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};

