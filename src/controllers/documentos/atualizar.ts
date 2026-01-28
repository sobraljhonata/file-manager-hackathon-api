import { noContent, notFound, serverError } from "@/helpers/http-helpers";
import Documento from "@/models/documento-model";
import { Controller, HttpRequest, HttpResponse } from "@/protocols";

export class AtualizarDocumentoController implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { documentoId, documento }: {documentoId: number, documento: Documento} = httpRequest.body

            const documentoEncontrado = await Documento.findByPk(documentoId)

            if(documentoEncontrado === null) {
                return notFound('Documento não encontrado')
            }

            await documentoEncontrado.update({ ...documento })
            await documentoEncontrado.save()

            return noContent()
        } catch (error) {
            return serverError(error)
        }
    }

}