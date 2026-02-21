import { createUser } from '../models/userModel.js';
export const saveUser = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        }

        await createUser(name);

        res.json({ message: 'Usuario guardado correctamente' });

    } catch (error) {
        console.error("Error al guardar:", error);
        res.status(500).json({ message: 'Error al guardar usuario' });
    }
};
