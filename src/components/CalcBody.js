import React, {useState} from 'react'
import OutputBox from './OutputBox'

function CalcBody() {

    const [value, setValue] = useState("")

 
    const getVal = (event) => {
        setValue(value.concat(event.target.name))
    }

    const clear = () => {
        setValue("")
    }

    const reverse = () => {
        setValue((value*-1).toString())
    }

    const calculate = () => {
        try {
            setValue(eval(value).toString())
        } catch (error) {
            setValue("Something went wrong")
        }
        
    }


    return (
        <div className=" w-80 h-auto  rounded-lg">
            {/* Output box */}
            <OutputBox value={value}/>
            {/* Buttons */}
            <div className="grid grid-cols-4 text-3xl">
                {/* Row 1 */}
                <button onClick={clear} className="button bg-gray-600 active:bg-gray-400">C</button>
                <button onClick={reverse} className="button bg-gray-600 active:bg-gray-400">+/-</button>
                <button name="%" onClick={getVal} className="button bg-gray-600 active:bg-gray-400">%</button>
                <button name="/" onClick={getVal} className="button bg-yellow-500 active:bg-yellow-600">/</button>
                {/* Row 2 */}
                <button name="7" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">7</button>
                <button name="8" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">8</button>
                <button name="9" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">9</button>
                <button name="*" onClick={getVal} className="button bg-yellow-500 active:bg-yellow-600">X</button>
                {/* Row 3 */}
                <button name="4" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">4</button>
                <button name="5" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">5</button>
                <button name="6" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">6</button>
                <button name="-" onClick={getVal} className="button bg-yellow-500 active:bg-yellow-600">-</button>
                {/* Row 4 */}
                <button name="1" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">1</button>
                <button name="2" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">2</button>
                <button name="3" onClick={getVal} className="button bg-gray-400 active:bg-gray-300">3</button>
                <button name="+" onClick={getVal} className="button bg-yellow-500 active:bg-yellow-600">+</button>
                {/* Row 5 */}
                <button name="0" onClick={getVal} className="col-span-2 button bg-gray-400 active:bg-gray-300 rounded-bl-xl">0</button>
                <button name="." onClick={getVal} className="button bg-gray-400 active:bg-gray-300">.</button>
                <button onClick={calculate} className="button bg-yellow-500 active:bg-yellow-600 rounded-br-xl">=</button>
            </div>
        </div>
    )
}

export default CalcBody
