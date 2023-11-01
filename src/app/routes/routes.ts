import { Router } from "express";
import companyRouter from "../controllers/CompanyController";

const routers = Router();

// Roteamento principal: Encaminha todas as solicitações relacionadas a empresas para o controlador de empresas.
routers.use("/companies", companyRouter);

export default routers;
