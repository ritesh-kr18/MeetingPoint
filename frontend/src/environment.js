let IS_PROD = true;
const server = IS_PROD ?
    " https://meetingpoint-4frm.onrender.com" :

    "http://localhost:8000"


export default server;