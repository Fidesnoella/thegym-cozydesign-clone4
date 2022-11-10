import React from 'react';

function Button({children, style}) {
    return (
        <div>
            <button className={`bg-default font-geomanistBold rounded-md text-white tracking-[0.125rem] leading-5 font-bold px-10 py-6 hover:bg-opacity-100 hover:bg-Stone ${style}`}>
              {children}
            </button>
        </div>
    );
}

export default Button;