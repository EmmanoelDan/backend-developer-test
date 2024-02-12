import express from "express";
import { routes } from "./routes/routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {

    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(routes)

    return server.listen(process.env.PORT, () => {
        console.log("Server listening on port " + process.env.PORT);
    });

})

