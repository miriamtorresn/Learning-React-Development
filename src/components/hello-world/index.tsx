import React from 'react';

interface IHelloWorld {
  name: string;
  lastName?: string;
};

function HelloWorld(prop: IHelloWorld) {
  return (
    <div className="HelloWorld">
      <h1>Hola {prop.name}!!!</h1>
    </div>
  );
}

export default HelloWorld;
