export const normalizarPropsDsGov = (props) => {

    const properties = {}
    for (const prop in { ...props }) {
        if (props[prop] === true) {
            properties[prop] = ""
        }
        else {
            properties[prop] = props[prop]
        }
    }

    return properties

}