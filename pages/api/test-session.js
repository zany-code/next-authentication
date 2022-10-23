import { getSession, useSession} from 'next-auth/react';

const handler = async (req, res) => {
    const session = await getSession({req})
    if (!session) {
        res.status(401).json({error : 'User Tidak Ditemukan'})
    } else {
        res.status(200).json({message : 'Succses', session})
    }
}
export default handler;