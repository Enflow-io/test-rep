exports.component = (name) => `import React from 'react';
import classes from './${name}.module.scss';

export interface ${name}Props {

}

const ${name} = ({}: ${name}Props) => {
  return <div className={classes.${name}}>Hello 👋, I am a ${name} component.</div>;
};
export default ${name};
`;


exports.styles = (name) => `.${name}{

}`