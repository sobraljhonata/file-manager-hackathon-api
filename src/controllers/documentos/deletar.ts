import { Controller, HttpRequest, HttpResponse } from "@/protocols";

export class ControllerGeneric implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        return {
            statusCode: 200,
            body: 'ok'
        };
    }

}