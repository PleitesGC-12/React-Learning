// Declaring variables in  jsx
const text = 'This is a text';
const numberYes = 123456;
const arrayYes = ['React Course', ' Score ', 4, ' ', 1000];
const booleanValue = true; // It doesn't show anything
const functionType = () => 1+1 // If we want the function to be shown we need to execute it with "()"
const objectType = {name: "Gerardo", age: 20} // shows an error in the console
const dateType = new Date(); // shows an error in the console because we can't pass objects

// by the way we can render objects using JSON.stringify
const ArrowComponent = () => {
    return (
        <div>
            <h1>Showing the results</h1>
            {/* We call variables inside curly brackets */}
            <h3>{arrayYes}</h3>
            <h3>{JSON.stringify(objectType)}</h3>
        </div>
    )
}
export default ArrowComponent;