import { Response } from "node-fetch"

export class BrawlAPIError extends Error{
    public response: Response
    constructor(response: Response){
        super()
        this.response = response
        this.message = `New BrawlAPIError: ${this.response.status} ${this.response.statusText}`
    }
}