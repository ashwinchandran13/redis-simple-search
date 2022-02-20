export default function CarForm() {

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(form, formData);

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <div className="flex">
            <form className="bg-slate-100 h-fit p-4 grid grid-cols-2 gap-4 place-content-center" onSubmit={handleSubmit}>
                <label className="p-2 text-xl font-mono text-black font-semibold mt-auto">Make</label><input className="p-2 h-10 rounded-md bg-gray-200 outline-sky-500" type="text" name="make" />
                <label className="p-2 text-xl font-mono text-black font-semibold mt-auto">Model</label><input className="p-2 h-10 rounded-md bg-gray-200 outline-sky-500" type="text" name="model" />
                <label className="p-2 text-xl font-mono text-black font-semibold mt-auto">Image</label><input className="p-2 h-10 rounded-md bg-gray-200 outline-sky-500" type="text" name="image" />
                <label className="p-2 text-xl font-mono text-black font-semibold mt-auto">Description</label><textarea className="p-2 rounded-md bg-gray-200 outline-sky-500" name="description"></textarea>
                <button className="col-span-2 w-fit place-self-end bg-sky-700 rounded-md p-2 mt-11 mr-4 hover:bg-sky-400 text-white" type="submit">Create Car</button>
            </form>
        </div>
    );
}