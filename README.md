# React context con State & Reducer

## Responsabilidades aisladas

Es necesario entender que para escalar y mantener el proyecto, es importante mantener responsabilidades aisladas.

**UI**: Es responsable del renderizado y la lógica relacionada con la experiencia de usuario.

**Hook** : Es responsable de mantener la lógica de estados más complejos, de filtrar, de comunicar con estados globales, retornar a la interfaz la expresión más simple del código, para su reutilización en el componente que sea requerido.

**Context**: En esta capa se encuentra el estado y las acciones que modifican dicho estado.

> Es importante mantener las responsabilidades aisladas porque nos permite modificar la forma de utilizar los estados independientemente de la UI. Es decir que las modificaciones solo deberán hacerse sobre la capa del Store (Context, Redux, Zustand, etc) y los hooks intermediarios entre la UI y el Store. La Interfaz no debería ser alterada, ya que la experiencia de usuario es la misma.

![image](https://github.com/NicoCroce/state-vs-reducer/assets/6332275/bd052a98-a2b7-4868-abf6-d0e7ae66cb7e)


## State vs useReducer

En este ejemplo se utiliza `Context` como estado global y dos alternativas.

Tanto `useState` como `useReducer` son hooks de estado en React, pero tienen diferencias significativas en cómo manejan y actualizan el estado en tus componentes.

1. **useState**:

   - `useState` es un hook simple que te permite agregar estado a componentes de función.
   - Se utiliza para manejar estados simples y autónomos en los componentes.
   - Puedes tener múltiples llamadas a `useState` para manejar varios estados en un solo componente.
   - Se utiliza principalmente cuando el estado es simple y no requiere lógica de actualización compleja.
   - La actualización del estado se realiza mediante una función setter devuelta por `useState`, y React se encarga automáticamente de fusionar los cambios de estado.
   - Ejemplo:
     ```javascript
     const [count, setCount] = useState(0);
     ```

2. **useReducer**:

   - `useReducer` es un hook más avanzado que te permite manejar estados más complejos y lógica de actualización personalizada.
   - Se utiliza cuando el estado tiene una estructura más compleja o cuando las actualizaciones del estado implican lógica más compleja que simplemente asignar un nuevo valor al estado.
   - Permite manejar el estado en función de acciones. Las acciones son objetos que describen cómo debe actualizarse el estado.
   - Se utiliza principalmente cuando tienes un estado que tiene un comportamiento más similar a un estado de máquina finita.
   - Puede ser más adecuado para componentes con una lógica de estado más compleja o que necesitan un mejor rendimiento en comparación con `useState`.
   - Ejemplo:

     ```javascript
     const initialState = { count: 0 };

     function reducer(state, action) {
       switch (action.type) {
         case "increment":
           return { count: state.count + 1 };
         case "decrement":
           return { count: state.count - 1 };
         default:
           throw new Error();
       }
     }

     const [state, dispatch] = useReducer(reducer, initialState);
     ```

   > Generalmente `action` se utiliza con esta estructura
   >
   > ```javascript
   > {type: string, payload: any}
   > ```

En resumen, debes utilizar `useState` cuando tengas estados simples y autónomos que no requieran lógica de actualización compleja. Por otro lado, `useReducer` es más adecuado cuando necesitas manejar estados más complejos, como estados con estructuras anidadas o cuando las actualizaciones del estado implican lógica más compleja que una simple asignación de valores. Además, `useReducer` puede ser más adecuado cuando tienes un gran número de estados relacionados entre sí o cuando necesitas una mayor optimización de rendimiento.

## Ejemplo

No encontramos con un contexto que tiene un estado (para hacerlo más simple) con dos acciones `changeUser` actualiza el usuario y `changeItems` actualiza los items.

Existen dos opciones.

1. La primera es crear un hook para cada parte del store, para reutilizarlo en la interfaz que sea necesario.

2. Crear un hook por pantalla, obteniendo los datos necesarios de `store`.

En ambas opciones nos encontramos con que la lógica de `useContext` se encuentra dentro del Hook. Esto simplifica la legibilidad de la UI.

![image](https://github.com/NicoCroce/state-vs-reducer/assets/6332275/76baf64c-ad88-44b2-a16e-5fd3319b6e1c)


## Comunicación entre capas

En este caso se muestra cómo cada interfaz obtiene lo que necesita de cada Hook.

![image](https://github.com/NicoCroce/state-vs-reducer/assets/6332275/c0826107-b5a5-4f9f-ad6f-1d7d97bd06d3)

