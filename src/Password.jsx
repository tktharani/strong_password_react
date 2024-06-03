import { useState } from 'react';

const Password = () => {
    const [length, setLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    return (
        <>
            <div className="password-gene">
                <h2>Strong Password Generator</h2>
                <div className="input-group">
                    <label htmlFor='num'>Password Length</label>
                    <input type="number" id='num' value={length} 
                    onChange={(e)=>setLength(parseInt(e.target.value))}/>
                </div>
                <div className="checkbox-group">
                    <input type='checkbox' id='upper' checked={includeUpperCase}
                     onChange={(e)=>setIncludeUpperCase(e.target.checked)}/>
                    <label htmlFor='upper'>Include Uppercase</label>
                </div>
                <div className="checkbox-group">
                    <input type='checkbox' id='lower' checked={includeLowerCase}
                     onChange={(e)=>setIncludeLowerCase(e.target.checked)} />
                    <label htmlFor='lower'>Include LowerCase</label>
                </div>
                <div className="checkbox-group">
                    <input type='checkbox' id='numbers' checked={includeNumbers}
                      onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
                    <label htmlFor='numbers'>Include Numbers</label>
                </div>
                <div className="checkbox-group">
                    <input type='checkbox' id='symbol' checked={includeSymbols} 
                    onChange={(e)=>setIncludeSymbols(e.target.checked)} />
                    <label htmlFor='symbol'>Include Symbols</label>
                </div>
                <button className='gen-btn'>Generate Password</button>
                <div className="generate-password">
                    <input type="text" readOnly />
                    <button className='copy-btn'>Copy</button>
                </div>
            </div>
        </>
    );
};

export default Password;
