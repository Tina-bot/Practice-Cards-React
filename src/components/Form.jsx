
const Form = ({ handleChange, handleSubmit, word }) => {

    return (
        <form method="submit" onSubmit={handleSubmit}>
            🌸 <input
                className="rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                type="text" onChange={handleChange} value={word} /> 🌸
        </form>
    )
}
export default Form