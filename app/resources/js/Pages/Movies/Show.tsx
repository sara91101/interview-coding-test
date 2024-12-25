import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Movie, PageProps } from '@/types';
import { Head,router  } from '@inertiajs/react';
import  { useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import 'font-awesome/css/font-awesome.min.css';

export default function Dashboard({
    movie
}:



PageProps<{ movie: Movie }>) {

    const [values, setValues] = useState({ // Form fields
        rating: "",
        notes: ""
    });

    // We will use function below to get
    // values from form inputs
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    // This function will send our form data to
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault()
        router.post(`/rate/${movie.id}`, values)
    }

    function deleteRate( id ) {
        router.delete(`/removeRate/${id}`);
    }


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   {movie.title}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <p>{movie.description}</p>
                    </div>

                    <div className="p-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {
                            movie.user_rate?
                            <div className="flex gap-4 justify-content-between">
                                    <div>
                                        Your Review :
                                        {Array.from(Array(movie.user_rate.rating), (e, i) => {
                                            return <i className="fa fa-star"></i>
                                        })}

                                        {Array.from(Array(5 - movie.user_rate.rating), (e, i) => {
                                            return <i className="fa fa-star-o"></i>
                                        })}
                                        {"\n"}
                                        <p>{movie.user_rate.notes}</p>
                                    </div>
                                    <p>
                                        <DangerButton type="button" onClick={() => deleteRate(movie.id)}>
                                            <i className="fa fa-trash"></i>
                                        </DangerButton>
                                    </p>
                            </div>
                                : <div></div>
                        }
                    </div>

                    <div className="p-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Pay attention how we create here input fields */}

                            <div>
                                <InputLabel htmlFor="rating" value="YourRating" />
                                <TextInput id="rating" value={values.rating} onChange={handleChange} type='number' max={5} min={1} className="block w-full mt-1"/>
                            </div>

                            <div>
                                <InputLabel htmlFor="notes" value="Notes" />
                                <textarea id="notes" value={values.notes} onChange={handleChange} className='block w-full mt-1'></textarea>
                            </div>

                            <div className="p-6">
                                <PrimaryButton type="submit" >Rate Movie</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
