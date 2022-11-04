export const events = new EventManager()

@EventConstructor()
export class RESPONSE {
    object: object
    constructor(object: object) {
        this.object = object
    }
}