import { Router } from "express";
import adaptRoute from "@/adapters/adaptRoute";
import { authMiddleware, authorizeRoles } from "@/middlewares";
import { Controller, HttpRequest, HttpResponse } from "@/protocols";

class ControllerGeneric implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        return {
            statusCode: 200,
            body: 'ok'
        };
    }

}

export default (router: Router): void => {
  router.get(
    "/pedidos/{:id}",
    authMiddleware,
    authorizeRoles(["Gerente", "Funcionario"]),
    adaptRoute(new ControllerGeneric())
  );
};