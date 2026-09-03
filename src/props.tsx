interface ButtonProps {
  text: string;
}
/* 
use a default export when a file contains a single main item/component (like a standalone component), 
and use named exports when a file utility handles multiple distinct items/components (like a collection of 
helper functions or icons).
 */

// props basically an object
/* 
Data always flows down.

Parent passes props.

Child receives them.

Child must not modify props.

 props are read-only.

*/
export function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}
interface SeniorNameprops {
  name: string;
  age: number;
  issenior: boolean;
  field: string[];
  otherthings: {
    nish: string;
    hobby: string;
  };
}
/* export function SeniorName(props: SeniorNameprops) {
  
  return <h2>{props.name}</h2>;
} */
// we generally write props with destructuring -> ({name})
export function SeniorName({
  name,
  age,
  issenior,
  field,
  otherthings,
}: SeniorNameprops) {
  if (issenior === true)
    return (
      <div>
        name:{name} is a respected person.his age is {age}.his field is{' '}
        {field.map((item) => item)}.other things about is,his nish is{' '}
        {otherthings.nish} and his hobby is {otherthings.hobby}
      </div>
    );

  return (
    <h2>
      {`${name} is respcted person though he is not senior as his age is ${age}.his
      field is ${field.map((item) => item)}.other things about is,his nish is
      ${otherthings.nish} and his hobby is ${otherthings.hobby}`}
    </h2>
  );
}
