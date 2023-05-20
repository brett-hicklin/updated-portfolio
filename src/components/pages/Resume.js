import React, { useState } from 'react';
import resume from '../../assets/resume.pdf'

export default function Resume(){
return (

    <div>
        <a href={resume} download="resume.pdf">Download Resume</a>

    </div>
)
}

