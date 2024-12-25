import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Movie, PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import 'font-awesome/css/font-awesome.min.css';

export default function Dashboard({
    movies,
}: PageProps<{ movies: Movie[] }>) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <ul className="p-6">
                            {movies.map(movie => (
                                <Link
                                    href={`/movies/${movie.slug}`}
                                    as="li"
                                    className="p-2 rounded-md cursor-pointer hover:bg-sky-100"
                                >
                                    <h2 className="font-bold">{movie.title}</h2>
                                    <p>{movie.description}</p>

                                    {
                                        movie.average_rate?
                                        <div className="flex gap-4 justify-content-between">
                                            <p>
                                                {Array.from(Array(Math.floor(movie.average_rate)), (e, i) => {
                                                    return <i className="fa fa-star"></i>
                                                })}

                                                {
                                                    movie.average_rate - Math.floor(movie.average_rate) ? <i className="fa fa-star-half-o"></i> : <span></span>
                                                }
                                                {Array.from(Array(Math.floor(5 - movie.average_rate)), (e, i) => {
                                                    return <i className="fa fa-star-o"></i>
                                                })}
                                            </p>
                                        </div>
                                        : <div></div>
                                    }
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
