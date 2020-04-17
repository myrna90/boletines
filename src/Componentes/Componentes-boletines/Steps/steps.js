import React from 'react';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from './FormStepFour';

const steps = 
[
    {name: 'Folio', component: <FormStepOne/>},
    {name: 'Proyecto', component: <FormStepTwo/>},
    {name: 'Descripción', component: <FormStepThree/>},
    {name: 'Usuario', component: <FormStepFour/>}
]

export {steps};
