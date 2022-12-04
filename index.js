const inquirer = require('inquirer'); 

const fs = require('fs');

const fse = require('fs-extra');

function addManager(){
    inquirer.createPromptModule([
        {
            type: 'input',
            message: 'Enter the name of the manager.',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Enter Manager ID.',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Enter manager email address.',
            name:'email'
        },
        {
            type: 'input',
            message: 'Enter Office Number',
            name: 'Office'
        },
        .then((answer)=>{
            let managerData = JSON.stringify(answer);
        })
    ])
}