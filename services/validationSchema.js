export default function InputValidator( type, value, ref ) {
    switch (type) {
        case 'email':
            if (value === '') {
                const validResult = { error: true, message: `${ref ? ref : 'Input'} field is required` }
                return validResult
            }
            else {
                const validResult = { error: false, message: `` }
                return validResult;
            }
            break;
    
        default:
            if (value === '') {
                const validResult = { error: true, message: `${ref ? ref : 'Input'} field is required` }
                return validResult
            }
            else {
                const validResult = { error: false, message: `` }
                return validResult;
            }
            break;
    }
}