function fancy_function (operator: string, value: number, index: number) {
    if (operator == "insert" && list.length >= index) {
        list.insertAt(index, value)
        serial.writeString("argument3 argument2 at position argument 1 - successful")
        serial.writeLine("")
        serial.writeNumbers(list)
    } else if (operator == "set" && list.length > index) {
        list[index] = value
        serial.writeString("argument3 argument2 at position argument 1 - successful")
        serial.writeLine("")
        serial.writeNumbers(list)
    } else if (list.length <= index) {
        serial.writeValue("operation not possible", 0)
    } else {
        serial.writeValue("operation not possible", 0)
    }
}
let list: number[] = []
list = [34, 97, 14, 67, 10]
let operator = "insert"
let indexx = 5
let value = 73
fancy_function(operator, value, indexx)
basic.forever(function () {
	
})
