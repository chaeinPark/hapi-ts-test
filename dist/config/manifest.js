import routes from "../routes/index.js";
const manifest = {
    server: {
        port: 9090
    },
    register: {
        plugins: [
            ...routes
        ]
    }
};
export default manifest;
